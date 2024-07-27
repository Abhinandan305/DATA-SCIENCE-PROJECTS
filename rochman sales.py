#!/usr/bin/env python
# coding: utf-8

# In[89]:


import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

store=pd.read_csv("/Users/abhinandandas/Downloads/store.csv")
train=pd.read_csv("/Users/abhinandandas/Downloads/train(2).csv")



# In[38]:


store


# In[39]:


train


# In[90]:


train=train.merge(store,on="Store",how="inner")

train.head()


# In[92]:


train= train.drop_duplicates()


# In[93]:


train.isnull().sum()


# In[94]:


#BOXPLOT for sales

column = train.select_dtypes(include=[np.number]).columns.tolist()

plt.figure(figsize=(13, 7))
sns.boxplot(data=train[column])
plt.title('Boxplots for Numerical Variables')
plt.xticks(rotation=45)
plt.show()


# In[95]:


#REMOVING OUTLIERS

Q1 = train['Sales'].quantile(0.25)
Q3 = train['Sales'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers = train[(train['Sales'] < lower_bound) | (train['Sales'] > upper_bound)]
print("Outliers in Sales:")
print(outliers[['Store', 'Date', 'Sales']])


# In[96]:


train = train[(train['Sales'] >= lower_bound) & (train['Sales'] <= upper_bound)]


# In[98]:


plt.figure(figsize=(7, 5))
sns.boxplot(x=train['Sales'])
plt.title('Boxplot for Sales (Outliers Removed)')
plt.show()


# In[99]:


# Missing data in %:
100 - (store.count() / store.shape[0]*100)


# In[100]:


train["CompetitionDistance"].fillna(train["CompetitionDistance"].median(), inplace = True)


train["CompetitionOpenSinceMonth"].fillna(0, inplace = True)
train["CompetitionOpenSinceYear"].fillna(0, inplace = True)


train["Promo2SinceWeek"].fillna(0, inplace = True)
train["Promo2SinceYear"].fillna(0, inplace = True)
train["PromoInterval"].fillna(0, inplace = True)

train.info()


# In[48]:


train["Date"]=pd.to_datetime(train["Date"],infer_datetime_format=True)
train["Day"]=train["Date"].dt.day
train["Week"]=train["Date"].dt.isocalendar().week
train["Month"]=train["Date"].dt.month
train["Year"]=train["Date"].dt.year

train = featured_date(train)


# In[49]:


train["Season"]=np.where(train["Month"].isin([3,4,5]),"Spring",
                           np.where(train["Month"].isin([6,7,8]),"Summer",
                                   np.where(train["Month"].isin([9,10,11]),"Autumn",
                                           np.where(train["Month"].isin([12,1,2]),"Winter","None"))))

train[["Date","Day","Week","Month","Year","Season"]].head(20)


# In[50]:


numeric_columns = train.select_dtypes(include=['number'])
correl = numeric_columns.corr()

# correlation heatmap
plt.figure(figsize=(13, 8))
sns.heatmap(correl, annot=True, cmap='coolwarm', fmt=".3f", linewidths=1)
plt.show()


# In[51]:


train.isnull().sum()



# In[53]:


print("Total number of stores: {}".format(len(train["Store"].unique())))
print("Average daily sales amount: {}".format(round(train["Sales"].mean(),2)))
print("Average daily sales per store: {}".format(round(train["Sales"].mean(),2)/len(train["Store"].unique())))


# In[54]:


sns.catplot(data = train, x='Month', y='Sales',
              col ='Promo', hue='Promo2', row='Year', kind="bar")
plt.show()


# In[55]:


group1=train.groupby("Assortment")["Sales"].mean().sort_values(ascending=False)
group1.plot(kind="bar")
plt.title("Average sales by product type")
plt.show()


# In[56]:


group2=train.groupby("StoreType")["Sales"].mean().sort_values(ascending=False)
group2.plot(kind="bar")
plt.title("Average sales by store type")
plt.show()


# In[58]:


plt.figure(figsize=(12,8))
sns.barplot(x="Season",y="Sales",data=train, hue="Promo")
plt.show()


# In[59]:


sns.catplot(data = train, x='Month', y='Sales',
              col ='StoreType', hue='Promo2', row='Year', kind="bar")
plt.show()


# In[60]:


sns.barplot(x="Assortment",y="Sales",hue="Promo",data=train);


# In[61]:


special_days_sales=train[train["StateHoliday"].isin(["a","b","c"])]
sns.barplot(x="StateHoliday",y="Sales",hue="Promo",data=special_days_sales);


# In[63]:


train["SalesPerCustomer"]=train["Sales"]/train["Customers"]

sns.catplot(data = train, x='Season', y='SalesPerCustomer', hue='Promo2', col='Year', kind="bar")
plt.show()


# In[64]:


train.isnull().sum()

# SalesPerCustomer includes 172869 missing value. Sales=0/Customer=0=NA - > Let's look at the sales on the days the store was closed.
df_not_oppen=df_train[df_train.Open==0]
df_not_oppen[(df_not_oppen["Sales"]==0) | (df_not_oppen["Customers"]==0)].shape
# In[66]:


# SalesPerCustomer includes 172869 missing value. Sales=0/Customer=0=NA - > Let's look at the sales on the days the store was closed.
df_not_oppen=train[train.Open==0]
df_not_oppen[(df_not_oppen["Sales"]==0) | (df_not_oppen["Customers"]==0)].shape


# In[68]:


train[(train.Open == 1) & (train.Sales == 0)].shape[0]


# In[69]:


train["SalesPerCustomer"]=train["SalesPerCustomer"].fillna(0)


# In[70]:


train.isnull().sum()


# In[72]:


train["CompetitionOpen"]=12*(train["Year"]-train["CompetitionOpenSinceYear"])+(train["Month"]-train["CompetitionOpenSinceMonth"])
# We converted the year to month and added the month values.
train["PromoOpen"]=12*(train["Year"]-train["Promo2SinceYear"])+(train["Week"]-train["Promo2SinceWeek"])/4.0
# We converted the year to month and added the week values.


# In[74]:


nc=["Customers","CompetitionDistance","CompetitionOpen","PromoOpen","SalesPerCustomer"] # numerical
kc=["DayOfWeek","StateHoliday","SchoolHoliday", "StoreType","Assortment","Open","Promo","Promo2","Week","Month","Year","Season","PromoInterval"] # category

sns.pairplot(train[["Sales","Customers","CompetitionDistance","CompetitionOpen"]])
plt.show()


# In[75]:


m={0:"0","0":"0","a":"a","b":"b","c":"c"}
train["StateHoliday"]=train["StateHoliday"].map(m)


# In[76]:


# correlation analysis
df_corr=train.select_dtypes(include=["float64","int64"]).corr()

plt.figure(figsize=(10,8))
plt.title("correlation matrix", color="red", fontsize=15)
sns.heatmap(df_corr,annot=True,cmap="Blues", fmt=".2f")
sns.set(font_scale=1,style='white')
plt.show()


# In[77]:


train.drop("Date",axis=1,inplace=True) # The date variable is represented by other columns.


# In[78]:


nc=["Customers","CompetitionDistance","CompetitionOpen","PromoOpen",] # numerical
kc=["DayOfWeek","StateHoliday","SchoolHoliday", "StoreType","Assortment","Open","Promo","Promo2","Week","Month","Year","Season","PromoInterval"] # category


# In[79]:


m2={0:"0","Jan,Apr,Jul,Oct":"Jan,Apr,Jul,Oct","Feb,May,Aug,Nov":"Feb,May,Aug,Nov","Mar,Jun,Sept,Dec":"Mar,Jun,Sept,Dec"}
train["PromoInterval"]=train["PromoInterval"].map(m2)


# In[81]:


from sklearn.preprocessing import LabelEncoder, OneHotEncoder, StandardScaler
from sklearn.model_selection import train_test_split,cross_val_score,KFold,GridSearchCV,cross_validate

# encoding
train[kc]=train[kc].astype("object")
le=LabelEncoder()
train.update(train[kc].apply(le.fit_transform))
train.head()


# In[83]:





# In[84]:


y=train["Sales"]
X=train.drop("Sales",axis=1)

# Train Test Split
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=0)


# In[85]:


plt.figure(figsize=(14, 10))
sns.barplot(x="DayOfWeek", y="Sales", data=train)
plt.title("Sales by Day of the Week", fontsize=15)
plt.title("Average Sales by Day of the Week", fontsize=16)
plt.xlabel("Day of the Week", fontsize=12)
plt.ylabel("Average Sales", fontsize=12)
plt.show()


# In[102]:


train.info()


# In[103]:


from sklearn.model_selection import train_test_split

train_X, val_X, train_y, val_y= train_test_split(X, train[['Sales']], test_size=0.2, random_state=32)

from sklearn.linear_model import LinearRegression
model_L = LinearRegression().fit(train_X, train_y)

predictions_train=model_L.predict(train_X)
predictions_val=model_L.predict(val_X)

from sklearn.metrics import mean_squared_error
rmse_trainL= mean_squared_error(predictions_train, train_y, squared=False)
rmse_valL= mean_squared_error(predictions_val, val_y, squared=False)

print(f"Training Error: {rmse_trainL}   \nValidation Error: {rmse_valL}")


# In[106]:


#XGBOOST
from xgboost import XGBRegressor
basemodel= XGBRegressor(random_state=33,n_jobs=-1).fit(train_X, train_y)


#Predictions
predict_train= basemodel.predict(train_X)
predict_val= basemodel.predict(val_X)

#RMSE
rmse_trainb=mean_squared_error(predict_train, train_y, squared= False)
rmse_valb=mean_squared_error(predict_val, val_y, squared=False)

print(f"Training Error: {rmse_trainb} \nValidation Error: {rmse_valb}")


# In[105]:


get_ipython().system('pip install xgboost')


# In[107]:


#Hyperparameter Tuning and Regularization 

#Define a function that fits the model, makes predictions and returns RMSE on val and training set
def best_params(**params):
    model_X= XGBRegressor(**params, random_state=33,n_jobs=-1).fit(train_X, train_y)
    predict_train= model_X.predict(train_X)
    predict_val= model_X.predict(val_X)
    rmse_train=mean_squared_error(predict_train, train_y, squared= False)
    rmse_val=mean_squared_error(predict_val, val_y, squared=False)
    
    print(f"With Hyperparameter tuning - \nTraining Error: {rmse_train} \nValidation Error: {rmse_val}")

#Fitting with best parameters (I manually tried different combinations of parameters)
best_params(n_estimators=300, max_depth=12, learning_rate=0.3, subsample=0.75, colsample_bytree=0.77)


# In[110]:


#fitting model on entire training data
model = XGBRegressor(n_estimators=300, max_depth=12, learning_rate=0.3, subsample=0.75, 
                     colsample_bytree=0.77, random_state=33, n_jobs=-1).fit(X, train['Sales'])

predict_X= model.predict(X)
rmse_X =mean_squared_error(predict_X,train['Sales'], squared= False)
print(f"Training Error: {rmse_X}")


# In[111]:


#Feature Importance
importance_df = pd.DataFrame({
    'feature': X.columns,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)
plt.figure(figsize=(10,6))
plt.title('Feature Importance')
sns.barplot(data=importance_df.head(10), x='importance', y='feature');


# In[115]:


y=train["Sales"]
X=train.drop("Sales",axis=1)

# Train Test Split
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=0)


# In[ ]:




