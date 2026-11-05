export const AlkatreszKartya = ({ megnevezes, leiras }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{megnevezes}</h5>
        <p className="card-text">{leiras}</p>
      </div>
    </div>
  );
};