import React from "react";
import "./loading.css";
function Loading() {
    return (
        <div className="loading">
            <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 100C77.6142 100 100 77.6142 100 50H0C0 77.6142 22.3858 100 50 100Z"
                    fill="url(#paint0_linear)"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M99.8474 50L11.8474 50C6.58873 50 2.12011 46.6174 0.498611 41.9094C4.36546 18.1425 24.9877 0 49.8474 0C77.4616 0 99.8474 22.3858 99.8474 50Z"
                    fill="url(#paint1_linear)"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 85C69.33 85 85 69.33 85 50H15C15 69.33 30.67 85 50 85Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 15C30.67 15 15 30.67 15 50L85 50C85 30.67 69.33 15 50 15Z"
                    fill="white"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="14.5"
                        y1="59.5"
                        x2="90.9443"
                        y2="59.088"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0288026" stop-color="white" />
                        <stop
                            offset="1"
                            stop-color="#0A638D"
                            stop-opacity="0.5"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear"
                        x1="8.63405"
                        y1="44"
                        x2="93.0388"
                        y2="45.0341"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0A638D" />
                        <stop
                            offset="1"
                            stop-color="#0A638D"
                            stop-opacity="0.5"
                        />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default Loading;
