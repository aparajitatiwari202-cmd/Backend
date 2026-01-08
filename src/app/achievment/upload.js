import db from '../../lib/db';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), '/upload/');
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ message: 'Upload error' });
      try {
        const { student_id, title, points } = fields;
        const filePath = files.file.filepath.replace(/\\/g, '/');
        await db.query(
          'INSERT INTO achievements (student_id, title, points, file_path) VALUES (?, ?, ?, ?)',
          [student_id, title, points, filePath]
        );
        res.status(200).json({ message: 'Achievement uploaded' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Database error' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
