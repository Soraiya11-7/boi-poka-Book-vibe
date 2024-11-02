import BannerImg from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-3">Box Office News!</h1>
                  
                    <button className="btn btn-success">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;