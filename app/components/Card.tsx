import React from "react";
import TransferButton from "./solana/Transfer";

const Card: React.FC = () => {
  return (
    <div className="card card-compact bg-base-100 w-80 shadow-xl">
      <figure>
        <img
          src="https://www.allrecipes.com/thmb/NOga9pgzUL85ZBwzB481ZkAyLzg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-jollibee-4x3-ca3a1c8782554ef69b54999900b8ceed.jpg"
          alt="Shoes"
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">Secret Recipe</h2>
        <p className="text-sm">
          This is a Jollibee secret recipe where all the ingredients are here in
          pdf files.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">0.01 Sol</span>
          <div className="card-actions">
            <div className="btn btn-primary btn-sm">
              <TransferButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
