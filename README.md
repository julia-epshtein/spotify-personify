# Spotify Stealth Mode

This project uses a Conda environment named `spotify_env`. Follow the steps below to set up the environment.

## Environment Setup

1. Create a new Conda environment:
    ```bash
    conda create --name spotify_env -c conda-forge python=3.11
    ```

2. Activate the newly created environment:
    ```bash
    conda activate spotify_env
    ```

## Package Installation

Install the necessary packages in the `spotify_env` environment:

1. Install Matplotlib:
    ```bash
    conda install -n spotify_env matplotlib
    ```

2. Install Pandas:
    ```bash
    conda install -n spotify_env pandas
    ```

3. Install Seaborn:
    ```bash
    conda install -n spotify_env seaborn
    ```

4. Install SciPy:
    ```bash
    conda install -n spotify_env scipy
    ```

5. Install Scikit-Learn:
    ```bash
    conda install -n spotify_env scikit-learn
    ```

6. Install TensorFlow:
    ```bash
    conda install -n spotify_env tensorflow
    ```

7. Install Keras from Conda-Forge and in the environment:
    ```bash
    conda install -c conda-forge keras
    conda install -n spotify_env keras
    ```

8. Install SciKeras from Conda-Forge and using pip:
    ```bash
    pip3 install scikeras
    ```

9. Install Flask and requests
    ```bash
    conda install Flask requests
    ```

## For Running main.py in the authentication folder

1. Activate the environment
    ```bash
    conda activate spotify_env
    ```

2. Run the file
    ```
    cd authentication
    python3 main.py
    ```

3. Go to Output in the VSCode Terminal and copy the Port URL
    ```
    http://127.0.0.1:5000
    ```


## Running the Web Application

1. To run the Next.JS Application, open a terminal in the `spotifystats` folder


2. Run the following commands to install all the required dependencies
   ```
    npm install
   ```

3. Once all the dependencies have been successfully installed, run the application using the following command

   ```
   npm run dev
   ```
