import pool from "../../../configs/database/database.config"
export default class Media {
    constructor(mediaInfo) {
        this.id_media = mediaInfo.id_media || null;
        this.id_link = mediaInfo.id_link || null;
        this.image_link = mediaInfo.url || null;
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
                image_link: this.image_link,
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
