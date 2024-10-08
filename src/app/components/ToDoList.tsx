"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TodoList = () => {
  const todoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // GSAP animation for the component when mounted
  useEffect(() => {
    gsap.from(todoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.5,
    });
    gsap.to(todoRef.current, {
      opacity: 1,
      scale: 0.8,
      duration: 1.0,
      delay: 0.5,
    });
  }, []);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={todoRef}
      className={`bg-[#1C1F22] p-10 rounded-3xl w-[400px] ${
        isOpen ? "" : "h-[200px]"
      } flex flex-col justify-between`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src="/images/todo.png"
            alt="List icon"
            width={24}
            height={24}
          />
          <h1 className="text-xl font-semibold ml-4">To-do list</h1>
        </div>
        <div
          className="bg-[#2C3035] p-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          {isOpen ? (
            <IoIosArrowUp className="text-base" />
          ) : (
            <IoIosArrowDown className="text-base" />
          )}
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid #2C2C2E",
          marginBottom: "16px",
        }}
      />
      <div className="flex items-center justify-between mb-2">
        <div className="flex">
          <input
            type="checkbox"
            className="mr-3 mt-1"
            style={{
              width: "24px",
              height: "24px",
              border: "2px solid #9A9A9A",
              borderRadius: "4px",
              backgroundColor: "#1C1C1E",
            }}
          />
          <span className="text-base text-white mt-1">
            Lorem Ipsum is simply
          </span>
        </div>
        <div className="flex items-center ml-3">
          <Image
            src="/images/time.png"
            alt="Clock icon"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-sm text-white ml-2">30 Sep</span>
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="todo-items">
          {/* To-do Items */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex">
              <input
                type="checkbox"
                className="mr-3 mt-1"
                style={{
                  width: "24px",
                  height: "24px",
                  border: "2px solid #9A9A9A",
                  borderRadius: "4px",
                  backgroundColor: "#1C1C1E",
                }}
              />
              <span className="text-base text-white mt-1">
                Lorem Ipsum is simply
              </span>
            </div>
            <div className="flex items-center ml-3">
              <Image
                src="/images/time.png"
                alt="Clock icon"
                width={16}
                height={16}
                className="mr-1"
              />
              <span className="text-sm text-white ml-2">30 Sep</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="flex">
              <input
                type="checkbox"
                className="mr-3 mt-1"
                style={{
                  width: "24px",
                  height: "24px",
                  border: "2px solid #9A9A9A",
                  borderRadius: "4px",
                  backgroundColor: "#1C1C1E",
                }}
              />
              <span className="text-base text-white mt-1">
                Lorem Ipsum is simply
              </span>
            </div>
            <div className="flex items-center ml-3">
              <Image
                src="/images/time.png"
                alt="Clock icon"
                width={16}
                height={16}
                className="mr-1"
              />
              <span className="text-sm text-white ml-2">30 Sep</span>
            </div>
          </div>

          {/* Add more to-do items here */}
        </div>
      )}
    </div>
  );
};

export default TodoList;
