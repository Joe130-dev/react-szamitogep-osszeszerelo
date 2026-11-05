import './App.css';
import { AlkatreszKartya } from './components/AlkatreszKartya';

function App() {
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
          />
        </div>

        <div className="col-md-4">
          <AlkatreszKartya
            megnevezes="Videokártya"
            leiras="Válaszd ki a megfelelő videokártyát!"
          />
        </div>

        <div className="col-md-4">
          <AlkatreszKartya
            megnevezes="Memória"
            leiras="Válaszd ki a memória méretét!"
          />
        </div>
      </div>
    </main>
  );
}

export default App;