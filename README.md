# ECG-Classifier
# ECG Anomaly Detection with 1D CNN and LSTM

This project classifies ECG signal patterns into different heart conditions using a custom **1D CNN architecture**. The UI is built using **React + Vite**, and the model is trained using PyTorch.

---

## Structure

| Folder       | Description                            |
|--------------|----------------------------------------|
| `frontend/`  | React UI for ECG input & classification |
| `notebooks/` | Training notebooks for 1D CNNs          |
| `data/`      | Sample ECG data in `.csv` format |

---

## 🧠 Model Architecture

- Built using **1D CNN**
- Trained on ECG data (shape: `360 x 1`)
- Handles multi-class classification

---

## 📊 Current Accuracy

| Model         | Accuracy | F1 Macro |
|---------------|----------|----------|
| HeartNetIEEE   | **97%**  | 97% |

---

## Next

- [ ] FastAPI backend
- [ ] Live prediction using uploaded ECG waveform
- [ ] Deployment (Render / Vercel)
