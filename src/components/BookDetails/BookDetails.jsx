import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    // const param = useParams();
    const { bookId } = useParams();
    // console.log(typeof bookId);
    const id = parseInt(bookId);

    const data = useLoaderData();
    // console.log(typeof data[0].bookId);

    const book = data.find(book => book.bookId === id);
    console.log(book);

    const { bookId: currentBookId, image , bookName,author,category,review, tags, totalPages,yearOfPublishing,rating,publisher} = book;
    return (
        //     <div className="card lg:card-side bg-base-100 flex flex-row shadow-xl"> 
        //     {/* <h2>Book Details: {bookId}</h2> */}
        //     <figure>
        //       <img className="w-36 my-4"
        //         src={image}
        //         alt="Album" />
        //     </figure>
        //     <div className="card-body">
        //       <h2 className="card-title">New album is released!</h2>
        //       <p>Click the button to listen on Spotiwhy app.</p>
        //       <div className="card-actions justify-end">
        //       <button className="btn btn-outline mr-4">Read</button>
        //       <button className="btn btn-accent">WishList</button>
        //       </div>
        //     </div>
        //   </div>
        <div className="card card-side bg-base-100 shadow-xl border my-5">
            <figure className=" w-[49%] py-20 ">
                <img className="w-[50%] "
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body  w-[50%]">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <div className="border border-dotted"></div>
                <h2>{category}</h2>
                <div className="border border-dotted"></div>
                <p className="text-xs"><span className="font-bold">Review:</span> {review}</p>
                <div className="flex gap-3">
                    <h2 className="font-bold">Tag</h2>
                    <div className="flex justify-center gap-4 ">
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-200 text-green-700">{tag}</button>)
                        }
                    </div>
                </div>
                <div className="border border-dotted"></div>
                <div className="flex gap-12 mb-5">
                    <div>
                    <h2>Number of Pages:</h2>
                    <h2>publisher:</h2>
                    <h2>Year Of Publishing:</h2>
                    <h2>Rating</h2>
                    </div>
                    <div className="font-bold">
                        <h2>{totalPages}</h2>
                        <h2>{publisher}</h2>
                        <h2>{yearOfPublishing}</h2>
                        <h2>{rating}</h2>
                    </div>
                </div>
                
                
                <div className="card-actions justify-start gap-3">
                    <button className="btn btn-outline mr-4">Read</button>
                    <button className="btn btn-accent">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;