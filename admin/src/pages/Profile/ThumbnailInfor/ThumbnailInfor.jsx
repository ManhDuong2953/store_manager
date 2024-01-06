import "./ThumbnailInfor.scss";

function ThumbnailInfor({ data }) {
  return (
    <>
      <div className="info_simple">
        <img
          src={
            data && data.avatar_link
              ? data.avatar_link
              : "https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
          }
          alt="avatar"
        />

        <h3 className="name_employee">{data && data.name_account}</h3>
        <div className="position">Nhân viên bán hàng</div>
        <div className="local-work">
          <small>tại</small> Mạnh Cường Shop
        </div>
        <div className="analyst">
          <span>
            Tổng số đơn: <strong>2312</strong>{" "}
            <p className="text-primary">đơn</p>
          </span>
          <span>
            BPM: <strong>654</strong>
            <p className="text-primary">đơn/tháng</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default ThumbnailInfor;
