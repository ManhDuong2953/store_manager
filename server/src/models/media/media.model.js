import pool from "../../../configs/database/database.config"
export default class Media {
    constructor(mediaInfo) {
        this.image_data = mediaInfo.url || null;
        this.fieldname = mediaInfo.fieldname || null;
        this.originalname = mediaInfo.originalname || null;
        this.encoding = mediaInfo.encoding || null;
        this.mimetype = mediaInfo.mimetype || null;
        this.destination = mediaInfo.destination || null;
        this.filename = mediaInfo.filename || null;
        this.path = mediaInfo.path || null;
        this.size = mediaInfo.size || null;
        this.time = new Date();
        this.id_link = mediaInfo.id_link || null;
        this.classify = mediaInfo.classify || null;
    }

    async saveMedia() {
        try {
            // Kiểm tra xem id_link tồn tại trước khi xóa
            const checkSql = 'SELECT id_link FROM images WHERE id_link = ?';
            const [checkRows] = await pool.query(checkSql, this.id_link);

            if (checkRows.length > 0) {
                // Nếu id_link tồn tại, thực hiện DELETE và INSERT
                const deleteSql = 'DELETE FROM images WHERE id_link = ?';
                await pool.query(deleteSql, this.id_link);

            }
            // Thêm bản ghi mới
            const insertSql = 'INSERT INTO images SET ?';
            const dataMedia = {
                image_data: this.image_data,
                fieldname: this.fieldname,
                originalname: this.originalname,
                encoding: this.encoding,
                mimetype: this.mimetype,
                destination: this.destination,
                filename: this.filename,
                path: this.path,
                size: this.size,
                time: this.time,
                id_link: this.id_link,
                classify: this.classify
            };
            const [insertRows] = await pool.query(insertSql, dataMedia);

            return insertRows;
        } catch (error) {
            console.error('Error saving media:', error);
            throw error;
        }
    }



}
