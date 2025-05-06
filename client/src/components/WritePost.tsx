import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { IoCloudUpload } from "react-icons/io5";

const WritePost: React.FC = () => {
  const editorRef = useRef<any>(null);
  const [editorError, setEditorError] = useState<string | null>(null);

  const handlePublish = () => {
    if (editorRef.current) {
      console.log('Published Post:', editorRef.current.getContent());
    } else {
      console.error('Editor instance not available');
      setEditorError('Editor failed to initialize. Please refresh and try again.');
    }
  };

  return (
    <div className='flex flex-col md:flex-row gap-4'>

    <div className="w-full  md:basis-[65%] p-4">
      <h2 className="text-2xl font-bold mb-4">Write a Post</h2>
      {editorError ? (
        <div className="text-red-500 mb-4">
          {editorError}
          <p>
            Please verify your TinyMCE API key at{' '}
            <a
              href="https://www.tiny.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              TinyMCE
            </a>
            .
          </p>
        </div>
      ) : (
        <Editor
          apiKey="lmu3xm5wsk7rwoidapiob4scycglrvp5qsrlv96ehuqht66k"
          onInit={(evt, editor) => {
            if (editor) {
              editorRef.current = editor;
              setEditorError(null); // Clear any previous errors
            } else {
              setEditorError('Failed to initialize TinyMCE editor.');
            }
          }}
          initialValue="<p>Write your post here...</p>"
          init={{
            height: 400,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
            content_style: 'body { font-family: Arial, sans-serif; font-size: 16px }',
          }}
        />
      )}
      <button
        onClick={handlePublish}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Publish
      </button>
    </div>


  {/* File Upload Option */}
  <div className="w-full md:basis-[35%]">
  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Publish</h2>

  <div className="mb-3">
    <p className="text-gray-600 font-medium mb-2">Status : <span className='text-green-500 font-semibold'>Save</span></p>
    {/* Optional status content */}
  </div>

  {/* File Upload Section */}
  <div className="mb-4">
    <label htmlFor="fileUpload" className="block text-gray-600 font-medium mb-2">
      Upload File
    </label>
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="fileUpload"
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <IoCloudUpload size={20}  className='text-green-500'/>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">SVG, PNG, JPG, PDF (max. 5MB)</p>
        </div>
        <input id="fileUpload" type="file" className="hidden" />
      </label>
    </div>

    {/* butotn */}

<div className="flex items-center gap-4 mt-4">
  <button
    className="px-4 py-2 rounded-lg bg-green-100 text-green-800 font-medium border border-green-300 hover:bg-green-200 transition duration-200"
  >
    Save as draft
  </button>
  <button
    className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition duration-200"
  >
    Update
  </button>
</div>
    {/* button */}
{/* // categorry */}
<div className="mb-4 mt-4">
  <p className="text-gray-700 font-semibold mb-2">Select Category</p>
  <div className="space-y-2 ">
    {["Environment", "Wildlife", "Forests", "Sustainability", ].map((category, index) => (
      <label
        key={index}
        className="flex items-center space-x-2 cursor-pointer text-gray-600 hover:text-green-700"
      >
        <input
          type="radio"
          name="category"
          value={category}
          className="text-green-600 focus:ring-green-500"
        />
        <span>{category}</span>
      </label>
    ))}
  </div>
</div>

{/* // categorry */}

  </div>
</div>

</div>


  );
};

export default WritePost;