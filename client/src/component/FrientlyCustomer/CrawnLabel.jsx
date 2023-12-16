import "./CrawnLabel.scss";
const CrawnTransparent = () => {
  return (
    <>
      <i title="Khách hàng mới" className="fa-solid fa-crown no-rank">
        <span>0</span>
      </i>
    </>
  );
};

const CrawnBronze = () => {
  return (
    <>
      <i title="Khách hàng Đồng" className="fa-solid fa-crown bronze">
        <span>1</span>
      </i>
    </>
  );
};

const CrawnSilver = () => {
  return (
    <>
      <i title="Khách hàng Bạc" className="fa-solid fa-crown silver">
        <span>2</span>
      </i>
    </>
  );
};

const CrawnGold = () => {
  return (
    <>
      <i title="Khách hàng Vàng" className="fa-solid fa-crown gold">
        <span>3</span>
      </i>
    </>
  );
};

const CrawnDiamond = () => {
  return (
    <>
      <i title="Khách hàng Kim Cương" className="fa-solid fa-crown diamond">
        <span>4</span>
      </i>
    </>
  );
};

export default {
  CrawnTransparent,
  CrawnBronze,
  CrawnSilver,
  CrawnGold,
  CrawnDiamond,
};
