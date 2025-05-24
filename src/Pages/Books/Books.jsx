import { Suspense } from "react";
import Book from "../Book/Book";


const Books = ({data}) => {
    

   
    return (
        <div>
            <h1 className="text-3xl text-center p-6"> Books</h1>
            <Suspense fallback={<span>loading.....</span>}>
            <Book data={data} ></Book>
            </Suspense>
        </div>
    );
};

export default Books;