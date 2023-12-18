# Spotify Stealth Mode

This project uses a Conda environment named `spotify_env`. Follow the steps below to set up the environment.

## Environment Setup

1. Create a new Conda environment:
    ```bash
    conda create -n spotify_env
    ```

2. Activate the newly created environment:
    ```bash
    conda activate spotify_env
    ```

3. Install Python 3.11 in the environment:
    ```bash
    conda install python3.11
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
    conda install -c conda-forge scikeras
    pip3 install scikeras
    ```
```