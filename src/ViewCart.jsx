import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeData } from './counterSlice.js';

export const ViewCart = () => {
  const cart = useSelector((state) => state.counter.data);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <div className="relative overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Product</th>
            <th scope="col" className="px-6 py-3">Quantity</th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 flex items-center">
                <a href="#" className="flex flex-col items-center">
                  <img
                    className="w-16 h-16 object-cover rounded-t-lg mr-4"
                    src={item.image}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                </a>
              </td>
              <td className="px-6 py-4">
                {item.quantity}
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => dispatch(decrement(item.id))}
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-l px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  -
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => dispatch(increment(item.id))}
                  type="button"
                  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-l px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  +
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => dispatch(removeData(item.id))}
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCart;
