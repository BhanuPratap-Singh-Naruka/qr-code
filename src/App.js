import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./App.css";

function App() {
  const [qrCode, setQrCode] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <input
          className="input"
          type="text"
          placeholder="QR Code text"
          onChange={(e) => setQrCode(e.target.value)}
        />
        {qrCode && <QRCodeSVG value={qrCode} className="qrcode" />}
        {/* {qrCode && <p>{qrCode}</p>} */}
      </header>
    </div>
  );
}

export default App;
