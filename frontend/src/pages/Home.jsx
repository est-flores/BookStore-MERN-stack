import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3x1 my-8'>Books List</h1>
                <Link to='/books/create'>
                    <FontAwesomeIcon icon="circle-plus" className='text-green green' color="#1269C7"/>
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Title</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>PublishYear</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {book.title}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {book.author}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {book.publishYear}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    <div>
                                        <Link to={`/books/details/${book._id}`}>
                                            <FontAwesomeIcon icon="circle-info" className='fill-current text-green'  color="green"/>
                                        </Link>
                                        <Link to={`/books/edit/${book._id}`}>
                                            <FontAwesomeIcon icon="edit" className='' color="orange"/>
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <FontAwesomeIcon icon="trash" color="red"/>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Home
