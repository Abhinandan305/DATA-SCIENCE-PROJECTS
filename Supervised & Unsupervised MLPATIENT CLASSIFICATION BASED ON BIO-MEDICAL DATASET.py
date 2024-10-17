#!/usr/bin/env python
# coding: utf-8

# CODE

# In[1]:


# Importing necessary libraries
from sklearn.cluster import KMeans
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from sklearn.decomposition import PCA
from sklearn.datasets import make_classification
from sklearn.svm import SVC
from sklearn.model_selection import RandomizedSearchCV
from sklearn.metrics import confusion_matrix



columns = [ 'pelvic incidence', 'pelvic tilt', 'lumbar lordosis angle', 'sacral slope',
'pelvic radius','grade of spondylolisthesis', 'Class']

df = pd.read_csv(r"/Users/abhinandandas/Downloads/vertebral.dat", header = None, sep = ' ', names = columns)


# In[2]:


# To display first 5 records
df.head()


# In[3]:


#Summary statistics
df.describe()


# In[4]:


#Checking duplicate values
df.duplicated()


# In[6]:


#Checking null values
df.isnull().sum()


# In[7]:


#Checking NAN values
df.isna().values.any()


# In[8]:


X = df.drop('Class', axis=1)  # Features
y = df['Class']

# Data splitting
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# In[9]:


#Boxplot for outlier detection

plt.figure(figsize=(12, 6))
sns.boxplot(data=df, orient="h", palette="Set2")
plt.title('Box plots for each biomedical feature')
plt.show()


# In[10]:


# Calculating Mean Absolute Deviation (MAD) 
mad_values = X_train.apply(lambda x: np.abs(x - x.median()).median() / 0.6745)


# Threshold for identifying outliers 
threshold_mad = 3  

outliers_mad = (np.abs(X_train - X_train.mean()) > threshold_mad * mad_values).any(axis=1)

# Imputing outliers
X_train_imputed = X_train.copy()
X_train_imputed[outliers_mad] = X_train.mean()


# In[11]:


#Standardization
scaler = StandardScaler()
X_train_std = scaler.fit_transform(X_train_imputed)
X_test_std = scaler.transform(X_test)


# In[12]:


# Applying PCA for dimensionality reduction

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_train_std)


# In[16]:


#BIPLOT to show variance percentage of principal components
feature_labels = ['pelvic incidence', 'pelvic tilt', 'lumbar lordosis angle', 'sacral slope',
'pelvic radius','grade of spondylolisthesis'] 

# Replace with your feature names
biplot(X_pca[:, :2], np.transpose(pca.components_[:2, :]), labels=feature_labels)
plt.show()


# In[17]:


#Before applying kmeans

plt.scatter(X_pca[:, 0], X_pca[:, 1],cmap='viridis')


# In[18]:


#Computing k value for clusters

import matplotlib.pyplot as plt

# list to store WCSS values for different k
wcss = []

# range of values to try
k_values = range(1, 11)

# Calculate WCSS for each k
for k in k_values:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_pca)
    wcss.append(kmeans.inertia_)


plt.plot(k_values, wcss, marker='o')
plt.title('Elbow Method for Optimal k')
plt.xlabel('Number of Clusters (k)')
plt.ylabel('Within-Cluster Sum of Squares (WCSS)')
plt.show()


# In[19]:


np.random.seed(42)
data = np.random.randn(100, 2)

# Fit PCA
pca = PCA(n_components=2)
pca.fit(data)
plt.figure(figsize=(8, 8))
plt.scatter(data[:, 0], data[:, 1], alpha=0.5, label='Original Data')

# Plotting PCA directions
origin = np.mean(data, axis=0)
scale = 2  # Adjust the scale for visualization
plt.quiver(*origin, *scale * pca.components_[0], color='red', scale=scale, label='1st Principal Component')
plt.quiver(*origin, *scale * pca.components_[1], color='blue', scale=scale, label='2nd Principal Component')

plt.xlabel('X')
plt.ylabel('Y')
plt.legend()
plt.grid(True)
plt.show()


# In[20]:


class_counts = df['Class'].value_counts()
plt.pie(class_counts, labels=class_counts.index, autopct='%1.1f%%', startangle=90)
plt.axis('equal')  # Equal aspect ratio ensures the pie chart is circular.
plt.title('Distribution of Class')
plt.show()


# In[21]:


sns.pairplot(df, hue='Class', markers=['o', 's'], palette='husl')
plt.suptitle('Pair Plot of Numerical Variables by Class', y=1.02)
plt.show()


# In[23]:


#Feature Importance Calculation
from sklearn.ensemble import RandomForestClassifier
X = df.drop("Class", axis=1)  # Features
y = df["Class"]  # Target variable

# Initializing Random Forest Classifier
rf_classifier = RandomForestClassifier(random_state=42)

# Model fitting
rf_classifier.fit(X, y)

# feature importance values
feature_importances = rf_classifier.feature_importances_


feature_importance_df = pd.DataFrame({"Feature": X.columns, "Importance": feature_importances})

# Sorting feature values
feature_importance_df = feature_importance_df.sort_values(by="Importance", ascending=False)

# Plotting feature importance
plt.figure(figsize=(10, 6))
sns.barplot(x="Importance", y="Feature", data=feature_importance_df, palette="viridis")
plt.title("Feature Importance")
plt.show()


# In[24]:


#Hyperparameter tuning

from sklearn.model_selection import RandomizedSearchCV

param_dist = {'C': [0.1, 1, 10, 100], 'kernel': ['linear', 'rbf'], 'gamma': [0.01, 0.1, 1, 10]}
svm_model = SVC()
random_search = RandomizedSearchCV(svm_model, param_dist, n_iter=10, cv=5, scoring='accuracy')
random_search.fit(X_train_std, y_train)

best_params = random_search.best_params_
best_model = random_search.best_estimator_
print("Best Parameters:", best_params)
print("Best Cross-Validated Accuracy: {:.2f}".format(random_search.best_score_))
print("Best Model:")
print(best_model)


# In[25]:


# Supervised Classification Model: SVM
svm_classifier = SVC(kernel='linear', C=1)
svm_classifier.fit(X_train_std, y_train)
y_pred = svm_classifier.predict(X_test_std)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"SVM Accuracy: {accuracy}")


# In[26]:


# Unsupervised Clustering: K-means
kmeans = KMeans(n_clusters=3, random_state=42)
clusters = kmeans.fit_predict(X_pca)


# In[27]:


# Scatter plot with clusters
plt.scatter(X_pca[:, 0], X_pca[:, 1], c= clusters, cmap='viridis')
plt.title('PCA Visualization with K-means Clusters')
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.show()


# In[28]:


y_pred = svm_classifier.predict(X_test_std)

# Confusion matrix
conf_matrix = confusion_matrix(y_test, y_pred)

# Plotting the matrix
sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues', cbar=False,
            xticklabels=['NORMAL', 'ABNORMAL'], yticklabels=['NORMAL', 'ABNORMAL'])
plt.title('Confusion Matrix - SVM Model')
plt.xlabel('Predicted Label')
plt.ylabel('True Label')
plt.show()


# In[30]:


from sklearn.datasets import make_classification
from sklearn.svm import SVC
import matplotlib.pyplot as plt
import numpy as np


X, y = make_classification(
    n_samples=100, 
    n_features=2, 
    n_informative=2,  
    n_redundant=0,    
    n_classes=2, 
    n_clusters_per_class=1, 
    random_state=42
)

# Fitting SVM model
svm = SVC(kernel='linear')
svm.fit(X, y)

# Plotting decision boundary
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='viridis')
plt.title('SVM Decision Boundary')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')


ax = plt.gca()
xlim = ax.get_xlim()
ylim = ax.get_ylim()

# grid for evaluating model
xx, yy = np.meshgrid(np.linspace(xlim[0], xlim[1], 100), np.linspace(ylim[0], ylim[1], 100))
Z = svm.decision_function(np.c_[xx.ravel(), yy.ravel()])

# Plotting decision boundary and margins
Z = Z.reshape(xx.shape)
plt.contour(xx, yy, Z, colors='k', levels=[-1, 0, 1], alpha=0.5, linestyles=['--', '-', '--'])
plt.show()


# In[32]:


# Plotting decision boundary with support vectors
support_vectors = svm.support_vectors_
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='viridis')
plt.scatter(support_vectors[:, 0], support_vectors[:, 1], color='red', marker='x', label='Support Vectors')
plt.title('SVM Decision Boundary with Support Vectors')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.legend()
plt.show()


# In[ ]:




