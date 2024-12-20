import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency, exchangeRate,getCartAmount,delivery_fee}=useContext(ShopContext);


  return (
    <div className='w-full'>
      <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTAL'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm dark:text-white'>
            <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {(getCartAmount()*exchangeRate)}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>TOTAL</b>
                <b>{currency}{(getCartAmount()*exchangeRate)===0?0:(getCartAmount()*exchangeRate)+delivery_fee}.00</b>
            </div>
      </div>
    </div>
  )
}

export default CartTotal
