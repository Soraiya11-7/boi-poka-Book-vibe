import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, image, author, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-5 border border-blue-500">
                <figure className="py-10 bg-gray-300 rounded-2xl">
                    <img
                        src={image}
                        className="h-[168px] rounded-xl border border-red-300"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-4 ">
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-200 text-green-700">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-300" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;