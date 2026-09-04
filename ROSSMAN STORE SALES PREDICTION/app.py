
import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from xgboost import XGBRegressor
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import mean_squared_error

# Page configuration
st.set_page_config(page_title="Rossmann Sales Analytics", layout="wide", page_icon="🏪")

# Custom CSS for a professional look
st.markdown("""
    <style>
    .main { background-color: #f5f7f9; }
    .stMetric { background-color: #ffffff; padding: 15px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    </style>
    """, unsafe_allow_html=True)

st.title("🏪 Rossmann Store Sales Prediction")
st.markdown("### *Interactive Machine Learning Pipeline

# --- Data Loading ---
@st.cache_data
def load_data():
    try:
        # These paths assume the CSVs are in the same di
        store = pd.read_csv("store.csv")
        train = pd.read_csv("train(2).csv")
        df = train.merge(store, on="Store", how="inner")
        return df
    except Exception as e:
        st.error(f"Error loading data: {e}. Please ensursv' are uploaded to the repository.")
        return None

df = load_data()

if df is not None:
    # --- Sidebar Navigation ---
    st.sidebar.header("Navigation")
    page = st.sidebar.radio("Go to", ["Executive Summaryediction"])

    if page == "Executive Summary":
        st.header("📈 Executive Summary")

        # KPI Row (Metrics)
        col1, col2, col3, col4 = st.columns(4)
        col1.metric("Total Stores", len(df["Store"].unique()))
        col2.metric("Avg Daily Sales", f"${round(df['Sal
        col3.metric("Avg Customers", f"{int(df['Customers'].mean())}")
        col4.metric("Total Records", f"{len(df):,}")

        st.markdown("---")
        col_left, col_right = st.columns(2)

        with col_left:
            st.subheader("Sales Distribution")
            fig1, ax1 = plt.subplots()
            sns.boxplot(x=df['Sales'], ax=ax1, color='#3
            st.pyplot(fig1)

        with col_right:
            st.subheader("Correlation Heatmap")
            fig2, ax2 = plt.subplots()
            sns.heatmap(df.select_dtypes(include=[np.nump='coolwarm', fmt=".2f", ax=ax2)
            st.pyplot(fig2)

    elif page == "Deep-Dive EDA":
        st.header("🔍 Exploratory Data Analysis")

        tab1, tab2, tab3 = st.tabs(["📅 Seasonality", " o Impact"])

        with tab1:
            st.subheader("Sales by Day of the Week")
            fig, ax = plt.subplots(figsize=(10, 5))
            # Ensuring DayOfWeek is treated as a category for the bar plot
            sns.barplot(x="DayOfWeek", y="Sales", data=d
            st.pyplot(fig)
            st.info("Insight: Identifies peak shopping dg levels.")

        with tab2:
            col_a, col_b = st.columns(2)
            with col_a:
                st.subheader("Avg Sales by Store Type")
                fig, ax = plt.subplots()
                df.groupby("StoreType")["Sales"].mean().sort_values().plot(kind="barh", ax=ax, color='#2ecc71')
                st.pyplot(fig)
            with col_b:
                st.subheader("Avg Sales by Assortment")
                fig, ax = plt.subplots()
                df.groupby("Assortment")["Sales"].mean()h", ax=ax, color='#e67e22')
                st.pyplot(fig)

        with tab3:
            st.subheader("Promotion vs Sales")
            fig, ax = plt.subplots()
            sns.barplot(x="Promo", y="Sales", data=df, a
            st.pyplot(fig)
            st.success("Observation: Promotions lead to increase in daily revenue.")

    elif page == "Model Prediction":
        st.header("🔮 Machine Learning Predictor")

        # --- Model Processing ---
        # We use a simplified version of your pipeline f
        data = df.copy().fillna(0)
        data["Date"] = pd.to_datetime(data["Date"])
        data["Month"] = data["Date"].dt.month

        le = LabelEncoder()
        for col in ["StoreType", "Assortment", "StateHol
            if col in data.columns:
                data[col] = le.fit_transform(data[col].a

        X = data.drop(["Sales", "Date"], axis=1, errors=
        y = data["Sales"]

        # Training the XGBoost model
        model = XGBRegressor(n_estimators=100, max_depth
        model.fit(X, y)

        # Display Feature Importance (Directly from your script's logic)
        st.subheader("Model Intelligence: Feature Import
        importance_df = pd.DataFrame({'feature': X.columns, 'importance': model.feature_importances_}).sort_values('importance',
ascending=False)
        fig, ax = plt.subplots()
        sns.barplot(x='importance', y='feature', data=impalette="magma")
        st.pyplot(fig)

        st.markdown("---")
        st.subheader("Test the Predictor")
        st.write("Adjust the parameters below to predict sales for a specific store scenario:")

        c1, c2, c3 = st.columns(3)
        with c1:
            cust = st.number_input("Estimated Customers", value=1000)
            promo = st.selectbox("Is Promo Active?", [0,
        with c2:
            dist = st.number_input("Competition Distance
            stype = st.selectbox("Store Type (Encoded)", [0, 1, 2, 3])
        with c3:
            assort = st.selectbox("Assortment (Encoded)", [0, 1, 2])
            month = st.slider("Month", 1, 12, 6)

        if st.button("Predict Daily Sales"):
            # Create input dataframe matching X columns
            input_data = {
                'Customers': cust,
                'CompetitionDistance': dist,
                'Promo': promo,
                'StoreType': stype,
                'Assortment': assort,
                'Month': month
            }
            full_input = pd.DataFrame([input_data])

            # Fill any missing columns from X with 0 to
            for col in X.columns:
                if col not in full_input.columns:
                    full_input[col] = 0

            full_input = full_input[X.columns] # Ensure column order matches training

            prediction = model.predict(full_input)[0]
            st.metric("Predicted Daily Sales", f"${round(prediction, 2)}")
