
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Words from "../words.json";
import NavBar from './NavBar.js';

export default class WordToDraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
          game: { ...this.props.appState },
          words: [...Words],
          timeFinish: false,
          word:''
        };
        console.log(this.props)
      }


    wordList = () => {
        let category = [...this.state.words[0].medium]; 
        let word = category[Math.floor(Math.random()*category.length)];
        this.setState({'word': word});
      };

      componentDidMount(){
        this.wordList()
    }


    render() {
        const path= this.props.match.path
        console.log(path)
        return (
            <div className='full' >
            <NavBar props={this.props}></NavBar>
            <div className='flex2 center bottom'>
            <div>
            <svg width="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M158.84 34.49C160.05 33.23 161.03 31.62 163.2 32.4C163.269 32.4208 163.334 32.4548 163.39 32.5C167.74 36.25 172.21 39.86 176.39 43.81C178.08 45.41 177.24 47.7 174.39 50.34C169.34 46.03 164.32 41.77 159.39 37.47C158.39 36.68 157.61 35.77 158.84 34.49Z" fill="#FDED01"/>
<path d="M164.77 47.33C165.32 47.75 165.77 48.24 166.44 48.79L160.75 55.06L154.1 48.85L159.4 43.21C161.32 44.69 163.05 46 164.77 47.33Z" fill="#FDED01"/>
<path d="M157.57 174.2C147 184.06 134.98 191.2 120.57 193.51C114.13 194.51 107.57 194.96 101.09 195.65C62.6 196.85 30.38 167.25 24.55 130.44C17.63 86.73 46.18 46.44 89.77 38.26C119.89 32.61 150.59 45.38 166.99 70.44C173.389 80.4198 177.51 91.6869 179.06 103.44C181.355 117.957 180.329 132.806 176.06 146.87C172.62 157.84 165.81 166.5 157.57 174.2ZM40.57 151.59C52.13 170.78 81.68 189.42 109.38 185.59C116.11 184.66 122.74 183.41 128.66 179.88C140.13 173.05 149.55 163.88 157.66 153.4C169.07 138.57 173.44 121.89 169.61 103.54C162.79 71.16 135 49 101.71 48.89C98.84 49.13 95.95 49.24 93.09 49.62C74.46 52.08 59.37 60.87 47.79 75.57C38.7286 87.0365 33.4834 101.052 32.79 115.65C32 128.28 33.86 140.49 40.54 151.59H40.57Z" fill="#FDED01"/>
<path d="M105.91 116.29C105.81 118.82 103.33 120.92 100.5 120.86C99.8132 120.899 99.1261 120.791 98.4844 120.543C97.8427 120.295 97.2612 119.914 96.7786 119.423C96.296 118.933 95.9234 118.346 95.6857 117.7C95.448 117.055 95.3506 116.366 95.4 115.68C95.4 112.25 97.4 109.93 100.26 109.95C102.87 110 106 113.5 105.91 116.29Z" fill="#FDED01"/>
<path d="M112.57 18.69C113.23 18.69 114.45 17.81 114.47 17.27C114.571 14.972 114.433 12.6697 114.06 10.4C113.97 9.84998 112.54 9.16998 111.77 9.21998C111.18 9.21998 110.45 10.28 110.18 11.01C110.024 11.8378 110.003 12.6856 110.12 13.52C110.143 14.7823 110.314 16.0375 110.63 17.26C110.814 17.6372 111.086 17.9643 111.424 18.2133C111.762 18.4624 112.155 18.6259 112.57 18.69V18.69ZM116.44 8.07998C119.55 8.43998 121.13 9.89998 121.66 12.97C121.99 14.9094 122.161 16.8727 122.17 18.84C122.17 22.14 120.51 23.73 117.23 23.73C111.88 23.73 106.29 23.73 101.23 23.73V23.91C95.74 23.91 90.5 24.08 85.16 23.91C79.22 23.67 77.43 21.43 78.08 15.56C78.54 11.28 80.39 9.16998 84.68 8.62998C95.2081 7.15416 105.877 6.96946 116.45 8.07998H116.44ZM101.44 20.35C101.83 20.35 102.58 19.07 102.78 18.25C102.873 17.3656 102.832 16.4724 102.66 15.6V15.6C102.74 14.3298 102.646 13.0546 102.38 11.81C101.945 10.9189 101.181 10.2309 100.25 9.88998C99.82 9.73998 98.47 10.62 98.46 11.05C98.3699 13.6902 98.507 16.3333 98.87 18.95C99 19.57 100.55 20.25 101.48 20.35H101.44ZM85.69 18.86C85.78 20.17 86.13 21.35 87.69 21.15C88.0333 21.1448 88.3715 21.0653 88.6812 20.9171C88.991 20.7689 89.265 20.5554 89.4844 20.2913C89.7039 20.0272 89.8636 19.7187 89.9526 19.3871C90.0416 19.0554 90.0578 18.7085 90 18.37C89.9802 16.4095 89.8366 14.4523 89.57 12.51C89.43 11.72 88.29 10.44 87.82 10.51C86.8405 10.8023 86.0169 11.4712 85.53 12.37C85.15 13.08 85.45 14.15 85.45 15.06H85.37C85.48 16.34 85.6 17.6 85.69 18.86Z" fill="#FDED01"/>
<path d="M87.7 28.71L113.51 28C113.65 29.84 113.71 31.41 113.85 33.29C104.93 32.29 96.15 32.41 87.7 34.63V28.71Z" fill="#FDED01"/>
<path d="M114 25.57C114.143 26.8184 114.22 28.0735 114.23 29.33C114.16 31.04 115.11 31.43 116.55 31.85C122.61 33.61 128.73 35.26 134.63 37.48C138.74 39.03 142.53 41.48 146.76 43.64L151.76 38.32C151.76 38.02 151.76 37.86 151.67 37.76C150.47 35.98 148.42 34.24 149.67 31.94C151.31 28.94 153.26 25.86 156.83 24.94C158.341 24.6427 159.909 24.9555 161.19 25.81C166.42 29.61 171.59 33.52 176.54 37.69C179.54 40.18 179.54 42.9 177.4 46.17C176.974 46.8098 176.506 47.4211 176 48C172.21 52.4 171.09 52.53 166.61 49.18L159.89 55.31C160.4 56.03 160.68 56.49 161.02 56.9C172.57 70.82 178.77 86.9 180.46 104.84C181.69 117.84 181.14 130.7 177.66 143.37C174.73 154.03 168.8 162.92 161.42 170.92C149.83 183.48 135.87 191.92 118.92 195.19C108.372 197.162 97.593 197.597 86.92 196.48C80.76 195.87 74.53 195.37 68.77 192.91C40.57 180.82 22.32 160.45 17 129.6C14.37 114.47 15.24 99.49 20.57 85.07C28.8 62.69 44.18 46.76 65.94 37C69.8362 35.3903 73.8113 33.9785 77.85 32.77C78.98 32.4 79.47 31.92 79.41 30.71C79.33 29.04 79.41 27.36 79.41 25.71C77.55 25.32 75.9 25.04 74.28 24.62C73.1557 24.3905 72.1445 23.7813 71.4162 22.8945C70.6878 22.0078 70.2867 20.8975 70.28 19.75C70.0502 16.3781 70.1037 12.9929 70.44 9.63C71.16 4 74.59 1.09 80.68 0.249995C81.3745 0.134808 82.0762 0.0679808 82.78 0.0499951C93.32 0.0499951 103.88 -0.170005 114.41 0.269995C119.58 0.489995 122.07 3.54 122.41 8.7C122.636 12.2112 122.6 15.7343 122.3 19.24C121.99 23.24 120.03 25.01 115.94 25.44C115.43 25.5 114.87 25.52 114 25.57ZM97.66 192.69C104.16 191.99 110.66 191.57 117.14 190.55C131.6 188.26 143.62 181.1 154.14 171.24C162.39 163.55 169.14 154.88 172.59 143.92C176.859 129.856 177.884 115.007 175.59 100.49C174.04 88.7369 169.919 77.4698 163.52 67.49C147.12 42.43 116.43 29.66 86.3 35.31C42.75 43.48 14.2 83.77 21.12 127.48C27 164.29 59.16 193.89 97.66 192.69ZM97.78 21V20.82C103.13 20.82 108.47 20.82 113.78 20.82C117.06 20.82 118.78 19.23 118.78 15.93C118.769 13.9627 118.599 11.9996 118.27 10.06C117.74 6.99 116.16 5.54 113.05 5.17C102.479 4.04742 91.8099 4.21868 81.28 5.68C76.99 6.22 75.14 8.33 74.68 12.6C74.04 18.47 75.79 20.71 81.73 20.96C87.08 21.12 92.43 21 97.78 21ZM171 47.38C173.86 44.74 174.69 42.44 173 40.84C168.84 36.89 164.37 33.28 160 29.53C159.943 29.4853 159.879 29.4514 159.81 29.43C157.65 28.65 156.67 30.26 155.45 31.52C154.23 32.78 155 33.71 155.92 34.52C160.9 38.81 165.92 43.07 171 47.38ZM84.12 31.65C92.81 29.42 101.46 29.33 110.37 30.31L110 25L84.13 25.73L84.12 31.65ZM156 40.26L150.7 45.9L157.35 52.11L163.05 45.85C162.42 45.29 161.92 44.85 161.38 44.38C159.67 43 157.94 41.73 156 40.26Z" fill="#101832"/>
<path d="M98.33 45.93C131.57 46.01 159.41 68.2 166.18 100.58C170.02 118.94 165.64 135.58 154.23 150.45C146.13 160.98 136.72 170.1 125.23 176.93C119.31 180.46 112.67 181.71 105.95 182.64C78.25 186.47 48.7 167.83 37.14 148.64C30.45 137.54 28.61 125.33 29.34 112.64C30.0355 98.0452 35.2805 84.0338 44.34 72.57C56 57.91 71.07 49.12 89.71 46.66C92.56 46.28 95.45 46.17 98.33 45.93ZM33.85 117.93C34.17 124.93 34.55 132.63 37.71 139.81C41.71 148.94 48.34 155.96 55.99 162.13C69.76 173.24 84.9 180.19 103.18 178.13C112.34 177.13 121 174.98 128.52 169.28C136.347 163.385 143.334 156.451 149.29 148.67C160.29 134.27 164.87 118.04 161.78 100.06C159 83.91 149.5 71.85 136.68 62.39C127.77 55.82 117.4 52.33 106.35 51.18C86 49.06 68.17 54.72 53.35 68.95C39.69 82.09 34.09 98.65 33.85 117.93V117.93Z" fill="#101832"/>
<path d="M82.06 12.12C82.06 11.21 81.76 10.12 82.14 9.42999C82.3814 8.9833 82.7089 8.58891 83.1037 8.26964C83.4985 7.95038 83.9527 7.71257 84.44 7.56999C84.91 7.47999 86.04 8.75999 86.19 9.56999C86.4531 11.5127 86.5967 13.4697 86.62 15.43C86.6755 15.7634 86.6596 16.1048 86.5735 16.4316C86.4873 16.7584 86.3328 17.0633 86.1202 17.326C85.9076 17.5887 85.6416 17.8034 85.3399 17.9557C85.0382 18.1081 84.7077 18.1948 84.37 18.21C82.76 18.41 82.37 17.21 82.37 15.92C82.37 14.63 82.15 13.41 82.04 12.15L82.06 12.12Z" fill="#101832"/>
<path d="M99.31 12.54C99.4808 13.4327 99.5212 14.3456 99.43 15.25C99.23 16.06 98.48 17.41 98.09 17.37C97.16 17.27 95.63 16.61 95.53 15.98C95.165 13.3635 95.0279 10.7202 95.12 8.07997C95.12 7.64997 96.48 6.76997 96.91 6.92997C97.8228 7.25862 98.5723 7.92914 99 8.79997C99.2659 10.0277 99.3601 11.2864 99.28 12.54H99.31Z" fill="#101832"/>
<path d="M106.74 10.56C106.615 9.70943 106.636 8.84384 106.8 8.00002C107.07 7.27002 107.8 6.25002 108.39 6.21002C109.16 6.21002 110.58 6.84002 110.68 7.39002C111.056 9.65943 111.197 11.9617 111.1 14.26C111.1 14.79 109.86 15.68 109.2 15.67C108.786 15.6051 108.393 15.4413 108.055 15.1924C107.717 14.9434 107.445 14.6168 107.26 14.24C106.948 13.0371 106.773 11.8024 106.74 10.56V10.56Z" fill="#101832"/>
<path d="M103 105L107.25 100.61C114.03 93.65 120.813 86.6933 127.6 79.74C128.72 78.59 129.82 77.05 131.6 78.74C132.8 79.89 132.51 81.3 130.76 83.08C122.92 91.0667 115.07 99.04 107.21 107C106.772 107.325 106.462 107.793 106.332 108.322C106.203 108.851 106.262 109.41 106.5 109.9C108.28 114.69 106.81 119.01 102.89 120.98C98.13 123.38 91.75 122.13 89.11 118.28C86.79 114.9 87.61 108.7 90.8 105.36C93.68 102.36 97.8 101.93 101.8 104.28L103 105ZM92 112.72C91.9506 113.406 92.048 114.095 92.2857 114.74C92.5234 115.386 92.896 115.973 93.3786 116.463C93.8612 116.953 94.4427 117.335 95.0844 117.583C95.7261 117.831 96.4132 117.939 97.1 117.9C99.93 117.96 102.41 115.9 102.51 113.33C102.62 110.54 99.51 107 96.86 106.98C94 107 92.06 109.29 92 112.72Z" fill="#101832"/>
<path d="M75.72 69.77C75.49 70.06 75.12 70.91 74.48 71.26C60.87 78.78 54.48 91.31 50.69 105.6C50.53 106.21 50.39 106.83 50.21 107.43C49.83 108.69 49.02 109.37 47.68 108.98C46.34 108.59 45.57 107.77 45.91 106.31C49.71 90.15 56.76 76.17 71.84 67.57C74 66.32 75.72 67 75.72 69.77Z" fill="#101832"/>
<path d="M49 119.56C48.2513 120.179 47.4025 120.666 46.49 121C45.21 121.25 44.38 120.43 44.36 119.07C44.34 117.71 45.21 116.73 46.56 116.95C47.43 117.09 48.17 117.95 48.97 118.52L49 119.56Z" fill="#101832"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="200" height="200" fill="white"/>
</clipPath>
</defs>
</svg>


            <h3>You have 20 seconds to draw</h3>
                <h1 className='words'>{this.state.word}</h1>
                <Link className="btn cta bg yel" to='/draw' game={this.state}>Go</Link>
            </div>
            </div>
            </div>
        )
    }
}



