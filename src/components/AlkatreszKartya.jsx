export const AlkatreszKartya = ({
  megnevezes,
  leiras,
  termekek,
  kivalasztottTermek,
  valasztasValtozas,
}) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{megnevezes}</h5>

        <p className="card-text">{leiras}</p>

        <select
          className="form-select"
          value={kivalasztottTermek?.id ?? ''}
          onChange={(esemeny) =>
            valasztasValtozas(Number(esemeny.target.value))
          }
        >
          <option value="">Válassz alkatrészt!</option>

          {termekek.map((termek) => (
            <option key={termek.id} value={termek.id}>
              {termek.nev} – {termek.ar.toLocaleString('hu-HU')} Ft
            </option>
          ))}
        </select>

        {kivalasztottTermek && (
          <p className="mt-3 fw-bold">
            Ár: {kivalasztottTermek.ar.toLocaleString('hu-HU')} Ft
          </p>
        )}
      </div>
    </div>
  );
};