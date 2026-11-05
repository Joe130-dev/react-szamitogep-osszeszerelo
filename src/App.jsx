import { useState } from 'react';
import { AlkatreszKartya } from './components/AlkatreszKartya';
import {
  processzorok,
  videokartyak,
  memoriak,
  tarhelyek,
  hazak,
  tapegysegek,
  egerek,
  billentyuzetek,
  nyomtatok,
  webkamerak,
} from './data/alkatreszek';
import './App.css';

const kategoriak = [
  { azonosito: 'processzor', megnevezes: 'Processzor', termekek: processzorok },
  { azonosito: 'videokartya', megnevezes: 'Videokártya', termekek: videokartyak },
  { azonosito: 'memoria', megnevezes: 'Memória', termekek: memoriak },
  { azonosito: 'tarhely', megnevezes: 'Tárhely', termekek: tarhelyek },
  { azonosito: 'haz', megnevezes: 'Számítógépház', termekek: hazak },
  { azonosito: 'tapegyseg', megnevezes: 'Tápegység', termekek: tapegysegek },
  { azonosito: 'eger', megnevezes: 'Egér', termekek: egerek },
  { azonosito: 'billentyuzet', megnevezes: 'Billentyűzet', termekek: billentyuzetek },
  { azonosito: 'nyomtato', megnevezes: 'Nyomtató', termekek: nyomtatok },
  { azonosito: 'webkamera', megnevezes: 'Webkamera', termekek: webkamerak },
];

function App() {
  const [kivalasztottAlkatreszek, setKivalasztottAlkatreszek] = useState({});

  const alkatreszKivalasztasa = (kategoriaAzonosito, termekAzonosito) => {
    const kategoria = kategoriak.find(
      (elem) => elem.azonosito === kategoriaAzonosito
    );

    const kivalasztottTermek = kategoria.termekek.find(
      (termek) => termek.id === termekAzonosito
    );

    setKivalasztottAlkatreszek((elozoAlkatreszek) => ({
      ...elozoAlkatreszek,
      [kategoriaAzonosito]: kivalasztottTermek ?? null,
    }));
  };

  const vegosszeg = Object.values(kivalasztottAlkatreszek).reduce(
    (osszeg, termek) => osszeg + (termek?.ar ?? 0),
    0
  );

  return (
    <main className="container py-5">
      <h1 className="text-center mb-4">
        Számítógép-összeszerelő
      </h1>

      <p className="text-center text-muted mb-5">
        Állítsd össze a saját számítógépedet!
      </p>

      <div className="row g-4">
        {kategoriak.map((kategoria) => (
          <div className="col-12 col-md-6 col-lg-4" key={kategoria.azonosito}>
            <AlkatreszKartya
              megnevezes={kategoria.megnevezes}
              leiras={`Válassz ${kategoria.megnevezes.toLowerCase()} alkatrészt!`}
              termekek={kategoria.termekek}
              kivalasztottTermek={
                kivalasztottAlkatreszek[kategoria.azonosito] ?? null
              }
              valasztasValtozas={(termekAzonosito) =>
                alkatreszKivalasztasa(
                  kategoria.azonosito,
                  termekAzonosito
                )
              }
            />
          </div>
        ))}
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