"use client";
import React from "react";

const SideBar: React.FC = () => {
  return (
    <div className="menu bg-base-300 text-base-content p-4 w-full md:w-64 min-h-screen">
      <ul className="menu">
        {/* Apps Section */}
        <li className="menu-title">
          <span className="text-primary">Apps</span>
        </li>
        <li>
          <details>
            <summary className="cursor-pointer">Ecommerce</summary>
            <ul>
              <li>
                <a>Children 1</a>
              </li>
              <li>
                <a>Children 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>File Manager</a>
        </li>
        <li>
          <a>Chat</a>
        </li>
        <li>
          <details>
            <summary className="cursor-pointer">Parent</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </details>
        </li>

        {/* Pages Section */}
        <li className="menu-title mt-4">
          <span className="text-primary">Pages</span>
        </li>
        <li>
          <a>Landing</a>
        </li>
        <li>
          <a>Auth</a>
        </li>

        {/* UI Showcase Section */}
        <li className="menu-title mt-4">
          <span className="text-primary">UI Showcase</span>
        </li>
        <li>
          <a>Components</a>
        </li>
        <li>
          <a>Forms</a>
        </li>

        {/* Others Section */}
        <li className="menu-title mt-4">
          <span className="text-primary">Others</span>
        </li>
        <li>
          <a>Documentation</a>
        </li>

        {/* Footer Section */}
        <div className="mt-auto pt-6">
          <div className="text-center text-base-content mb-4">
            <span className="text-lg font-semibold">Connect with us</span>
          </div>
          <div className="flex justify-around">
            <a href="#" className="text-xl text-base-content">
              <i className="fab fa-xing"></i>
            </a>
            <a href="#" className="text-xl text-base-content">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className="text-xl text-base-content">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
