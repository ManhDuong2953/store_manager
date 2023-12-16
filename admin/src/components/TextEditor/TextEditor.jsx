import { useCallback, useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS styles
import "./TextEditor.scss"

const TextEditor = ({ parentComponent, placeholder, valueOld }) => {
  // Tạo cấu hình tùy chỉnh cho các module
  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'size': [] }], // Chỉ giữ tùy chọn font
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['blockquote', 'code-block'],
      ['formula'],
      [{ 'align': [] }],
      ['clean']
    ],
  };
  

  const [valuePrev, setValuePrev] = useState(null)
  useEffect(() => {
    setValuePrev(valueOld)
  }, [valueOld]);

  // Hàm xử lý khi nội dung trình soạn thảo thay đổi
  const handleSucc = useCallback((e) => {
    setValuePrev(e)
    parentComponent(e);
  }, [parentComponent]);

  return (<div className='text-editor--main'>
    <ReactQuill
      onChange={handleSucc}
      modules={modules}
      value={valuePrev}
      theme="snow" // Chọn chủ đề giao diện
      placeholder={placeholder || "Viết mô tả vào đây"}
    />
  </div>
  );
};

export default TextEditor;
