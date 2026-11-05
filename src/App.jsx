import { useState } from 'react';
import { AlkatreszKartya } from './components/AlkatreszKartya';
import {
  processzorok,
  videokartyak,
  memoriak,
} from './data/alkatreszek';
import './App.css';

function App() {
  const [kivalasztottProcesszor, setKivalasztottProcesszor] = useState(null);
  const [kivalasztottVideokartya, setKivalasztottVideokartya] = useState(null);
  const [kivalasztottMemoria, setKivalasztottMemoria] = useState(null);

  const termekKivalasztasa = (termekek, termekAzonosito, beallitas) => {
    const kivalasztottTermek = termekek.find(
      (termek) => termek.id === termekAzonosito
    );

    beallitas(kivalasztottTermek ?? null);
  };

  const vegosszeg =
    (kivalasztottProcesszor?.ar ?? 0) +
    (kivalasztottVideokartya?.ar ?? 0) +
    (kivalasztottMemoria?.ar ?? 0);

  return (
    <main className="container py-5">
      <h1 className="text-center mb-4">
        Számítógép-összeszerelő
      </h1>

      <p className="text-center text-muted mb-5">
        Állítsd össze a saját számítógépedet!
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <AlkatreszKartya
            megnevezes="Processzor"
            leiras="Válaszd ki a számítógép processzorát!"
            termekek={processzorok}
            kivalasztottTermek={kivalasztottProcesszor}
            valasztasValtozas={(azonosito) =>
              termekKivalasztasa(
                processzorok,
                azonosito,
                setKivalasztottProcesszor
              )
            }
          />
        </div>

        <div className="col-md-4">
          <AlkatreszKartya
            megnevezes="Videokártya"
            leiras="Válaszd ki a megfelelő videokártyát!"
            termekek={videokartyak}
            kivalasztottTermek={kivalasztottVideokartya}
            valasztasValtozas={(azonosito) =>
              termekKivalasztasa(
                videokartyak,
                azonosito,
                setKivalasztottVideokartya
              )
            }
          />
        </div>

        <div className="col-md-4">
          <AlkatreszKartya
            megnevezes="Memória"
            leiras="Válaszd ki a memória méretét!"
            termekek={memoriak}
            kivalasztottTermek={kivalasztottMemoria}
            valasztasValtozas={(azonosito) =>
              termekKivalasztasa(
                memoriak,
                azonosito,
                setKivalasztottMemoria
              )
            }
          />
        </div>
      </div>

      <div className="alert alert-primary mt-5 text-center">
        <h3 className="mb-0">
          Végösszeg: {vegosszeg.toLocaleString('hu-HU')} Ft
        </h3>
      </div>
    </main>
  );
}

export default App;