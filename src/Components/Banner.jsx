


const Banner = () => {
    return (
        <div className="ImgBg p-4 md:p-36 mb-20">
          <div className="p-0 md:p-12 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white text-center">Taste Our Delicious <br />
            Best Foods</h1>
            <p className=" text-gray-300 font-medium mb-6 text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                 by injected humou.
            </p>
            <div className="flex mt-6">
              <input type="text" placeholder="Type here" className="input px-12 input-bordered w-full max-w-xs" />
              <button className=" bg-orange-100 p-3 px-6 rounded-xl">Search</button>
            </div>
          </div> 

        </div>
    );
};

export default Banner;