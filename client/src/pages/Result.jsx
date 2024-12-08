import React, { useContext, useState } from 'react';
import axios from 'axios';
import { assets } from '../assets/assets';
import { AppContext } from '../contex/AppContex';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Result = () => {
  const [text, setText] = useState(''); // Input text state
  const [image, setImage] = useState(null); // State for generated image
  const [loading, setLoading] = useState(false); // Loading state

  const { backendUrl, token } = useContext(AppContext);



  const navigate = useNavigate()


  const resultImage = async () => {
    try {
      if (!token) {
        return alert("Please login first");
      }

      if (!text.trim()) {
        return alert("Please enter some text");
      }

      setLoading(true); // Start loading

      const form = new FormData();
      form.append('prompt', text);

      const { data } = await axios.post(`${backendUrl}/api/image/upload`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data, "data");

      if(data.success){
        toast.success( "successfully generate Images")
        
      }
      setImage(data.image);
    } catch (error) {
      console.error(error ,"error");
      // alert("Something went wrong! Please try again.");
      toast.error(error.response.data.message
      )
      navigate("/price")

      
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm w-full">
        {/* Sawirka */}

        {
          loading ? (
            <div>
            <div className="flex justify-center items-center mt-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
            <p className="text-center text-gray-500">Processing...</p>
          </div>
          )  : (
            <div className="flex justify-center mb-4">
            {image ? (
              <img src={image} alt="Generated" className="rounded-lg" />
            ) : (
              <img src={assets.sample_img_2} alt="Placeholder" className="rounded-lg" />
            )}
          </div>

          )
        }
      
        {/* Input */}
        <input
          type="text"
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Button */}
        <button
          onClick={resultImage}
          className={`w-full text-white py-2 rounded-md ${
            loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>

      
      {/* download button */}

      {image && (
        <a href={image} download="generated.png" className="block text-center text-blue-500 mt-4">
          Download Image
        </a>

      )
    }
        
      </div>
      
    <Toaster />
    </div>
  );
};

export default Result;
