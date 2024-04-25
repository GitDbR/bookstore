import React from 'react'


function Cards({item}) {
    console.log(item?.image);

    // Render the component only if item is defined
    if (!item) {
        return null;
    }    return (
        <div className='mt-4 my-3 p-3'>
            <div className="card w-94 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions flex justify-between">
                        <div className="border-[2px] rounded-full px-3 py-1 hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">$ {item.price}</div>
                        <div className="border-[2px] rounded-full px-3 py-1 hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">Buy Now!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
