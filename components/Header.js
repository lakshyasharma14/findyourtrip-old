import styled from "styled-components";
import { Search, Globe, Menu, User } from "react-feather";
import { useRef, useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import ThemeToggle from "./ThemeToggle";
import { useMediaQuery } from "@react-hook/media-query";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";
import Link from "next/dist/client/link";
export default function Header({ placeholder }) {
  const router = useRouter();

  const navRef = useRef(null);
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const primaryLocationRef = useRef(null);
  const secondaryLocationRef = useRef(null);

  const isSmallScreen = useMediaQuery("(max-width: 36rem)");

  //form data

  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const openDatePicker = () => {
    setInputFocus(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      if (!isSmallScreen && secondaryLocationRef.current) {
        secondaryLocationRef.current.focus();
      }
    }, 10);
  };
  const closeDatePicker = () => {
    setInputFocus(false);
    setLocation("");
    setCheckInDate(new Date());
    setCheckOutDate(new Date());
    document.body.style.overflow = "initial";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) {
      primaryLocationRef.current.focus();
      return;
    }
    router.push({
      pathname: "/search",
      query: {
        location: location,
        checkIn: checkInDate.toISOString(),
        checkOut: checkOutDate.toISOString(),
      },
    });
    setTimeout(() => closeDatePicker(), 100);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeDatePicker();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderSection
      ref={headerRef}
      className={[
        scrolled || inputFocus || router.pathname !== "/" ? "scrolled" : null,
        inputFocus ? "inputFocus" : null,
      ]}
    >
      <div className="headerInner">
        <div className="logo" onClick={() => router.push("/")}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200.000000 200.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,230.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M3340 1250 l0 -1010 1775 0 1775 0 0 1010 0 1010 -1775 0 -1775 0 0
-1010z m539 663 c22 -82 70 -249 105 -373 63 -222 64 -224 75 -185 6 22 53
189 104 370 l94 330 112 3 c104 2 112 1 107 -15 -3 -10 -75 -240 -161 -511
l-155 -493 0 -240 0 -239 -110 0 -110 0 0 233 0 232 -164 518 -163 517 112 0
113 0 41 -147z m1075 -284 c75 -28 126 -87 157 -181 23 -70 24 -86 24 -348 0
-262 -1 -278 -24 -348 -47 -142 -133 -202 -295 -202 -45 0 -105 7 -132 15
-109 32 -174 128 -193 285 -14 109 -14 391 0 500 19 154 84 252 189 285 71 22
209 19 274 -6z m1676 -102 c0 -68 -3 -126 -6 -130 -4 -3 -18 0 -33 7 -68 34
-146 25 -195 -23 l-31 -31 -3 -395 -3 -395 -114 0 -115 0 0 540 0 540 115 0
115 0 0 -62 0 -63 31 38 c47 58 123 97 187 97 l52 0 0 -123z m-1100 -330 c0
-365 2 -447 14 -462 22 -31 88 -25 139 13 l42 30 3 431 2 431 115 0 115 0 0
-540 0 -540 -114 0 -115 0 -3 51 -3 51 -40 -32 c-78 -62 -112 -75 -207 -75
-78 0 -89 2 -113 25 -15 14 -36 43 -46 65 -17 37 -19 75 -19 518 l0 477 115 0
115 0 0 -443z"
                fill="currentColor"
              />
              <path
                d="M4781 1461 c-13 -3 -34 -19 -45 -34 -20 -27 -21 -40 -21 -327 0 -286
1 -300 21 -326 41 -56 129 -50 158 10 24 50 24 581 0 632 -19 40 -65 58 -113
45z"
                fill="currentColor"
              />
              <path
                d="M550 1310 l0 -750 105 0 105 0 0 340 0 340 135 0 135 0 0 90 0 90
-135 0 -135 0 0 230 0 230 190 0 190 0 0 90 0 90 -295 0 -295 0 0 -750z"
                fill="currentColor"
              />
              <path
                d="M2960 1795 c0 -146 -4 -265 -8 -265 -4 0 -24 16 -43 36 -52 55 -104
78 -174 78 -163 1 -235 -106 -256 -384 -26 -325 26 -582 133 -663 90 -69 224
-52 307 37 14 14 28 26 33 26 4 0 8 -22 8 -50 l0 -50 105 0 105 0 0 750 0 750
-105 0 -105 0 0 -265z m-52 -350 l52 -24 0 -330 0 -330 -52 -16 c-81 -24 -144
-20 -172 10 -39 42 -48 97 -53 326 -6 241 3 311 44 359 22 26 31 30 76 30 34
0 70 -9 105 -25z"
                fill="currentColor"
              />
              <path
                d="M6970 1970 l0 -90 135 0 135 0 0 -660 0 -660 105 0 105 0 0 660 0
660 135 0 135 0 0 90 0 90 -375 0 -375 0 0 -90z"
                fill="currentColor"
              />
              <path
                d="M1240 1900 l0 -110 105 0 105 0 0 110 0 110 -105 0 -105 0 0 -110z"
                fill="currentColor"
              />
              <path
                d="M8370 1900 l0 -110 105 0 105 0 0 110 0 110 -105 0 -105 0 0 -110z"
                fill="currentColor"
              />
              <path
                d="M2070 1636 c-72 -21 -92 -31 -148 -75 l-52 -41 0 60 0 60 -105 0
-105 0 0 -540 0 -540 105 0 105 0 0 426 c0 476 -7 432 72 474 54 29 102 26
127 -6 21 -26 21 -37 21 -460 l0 -434 105 0 106 0 -3 493 -3 494 -28 36 c-15
20 -36 41 -47 47 -32 17 -103 20 -150 6z"
                fill="currentColor"
              />
              <path
                d="M8164 1640 c-48 -11 -99 -46 -144 -98 l-40 -47 0 73 0 72 -105 0
-105 0 0 -540 0 -540 105 0 105 0 0 378 c0 421 0 424 69 469 40 27 113 31 166
9 l35 -15 0 125 0 124 -27 -1 c-16 -1 -42 -4 -59 -9z"
                fill="currentColor"
              />
              <path
                d="M9149 1635 c-27 -9 -69 -35 -98 -61 l-51 -46 0 56 0 56 -105 0 -105
0 0 -700 0 -700 105 0 105 0 0 210 c0 116 3 210 6 210 3 0 26 -18 52 -40 108
-96 261 -84 334 27 72 110 92 231 85 520 -5 244 -22 328 -79 398 -58 69 -160
98 -249 70z m60 -171 c44 -37 59 -102 67 -289 10 -255 -15 -405 -72 -435 -28
-16 -116 -9 -166 13 l-38 16 0 330 0 330 29 20 c68 49 134 54 180 15z"
                fill="currentColor"
              />
              <path
                d="M1240 1100 l0 -540 105 0 105 0 0 540 0 540 -105 0 -105 0 0 -540z"
                fill="currentColor"
              />
              <path
                d="M8370 1100 l0 -540 105 0 105 0 0 540 0 540 -105 0 -105 0 0 -540z"
                fill="currentColor"
              />
            </g>
          </svg>
        </div>
        <nav ref={navRef}>
          <a href="#" className="active">
            Places to stay
          </a>
          <a href="#">Experiences</a>
          <a href="#">Online Experiences</a>
        </nav>
        <MobileNav />
        <form className="search">
          <input
            type="text"
            ref={primaryLocationRef}
            placeholder={placeholder ? placeholder : "Where are you going?"}
            onFocus={openDatePicker}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          {inputFocus && (
            <div className="overlay">
              <div className="field">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  value={location}
                  ref={secondaryLocationRef}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Where are you going?"
                />
              </div>

              <div className="field">
                <label>Check-in</label>
                <input disabled placeholder="Add dates" value={checkInDate} />
              </div>

              <div className="field">
                <label>Check-out</label>
                <input disabled placeholder="Add dates" value={checkOutDate} />
              </div>
            </div>
          )}
          <button
            type="submit"
            disabled={inputFocus && !(location && checkInDate && checkOutDate)}
            onClick={handleSubmit}
            aria-label="search places"
          >
            <Search />
            <span>Search</span>
          </button>
        </form>
        {inputFocus && (
          <DatePicker
            className="datepicker"
            close={closeDatePicker}
            checkInDate={{ value: checkInDate, setValue: setCheckInDate }}
            checkOutDate={{ value: checkOutDate, setValue: setCheckOutDate }}
          />
        )}

        <div className="profile">
          <Link href="/signin">Become a host</Link>
          <ThemeToggle icon />
          <a href="#" className="globe">
            <Globe />
          </a>
          <Link href="/signin">
            <div className="user">
              <Menu className="menu" />
              <User className="userIcon" />
            </div>
          </Link>
        </div>
      </div>
    </HeaderSection>
  );
}

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  color: #fafafc;
  padding: 1.5rem var(--sidePadding);
  width: 100%;
  z-index: 10;
  transition: background 0.2s, border-bottom 0.2s;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--light);
    border-radius: 99px;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    transition: all 0.2s;

    label,
    input,
    .guestNumber {
      background: none;
      font-size: 14px;
      border: none;
      line-height: 1.5;
      display: block;
      color: var(--dark);
      outline: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    input {
      width: 100%;
      font-weight: 700;

      &::placeholder {
        color: var(--dark);
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .guestNumber {
      font-weight: 700;
      .empty {
        color: var(--dark);
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .field {
      width: 100%;
      padding: 0.5rem 1.5rem;
      border-radius: 99px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: background 0.2s;
      position: relative;

      & + .field::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 2rem;
        background: var(--gray);
        border-radius: 2px;
        left: 0;
        transition: transform 0.2s;
      }
      &:hover,
      &:focus-within {
        background: var(--gray);
      }

      &:last-of-type {
        padding-right: 10rem;
      }
    }
  }
  .overlay:hover .field::before,
  .overlay:focus-within .field::before {
    transform: scale(0);
  }

  .user,
  .profile,
  .logo,
  .globe,
  nav {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .headerInner {
    max-width: var(--containerWidth);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }

  & > div {
    flex: 0 0 20%;
  }
  nav {
    flex: 1;
    justify-content: center;
    transition: all 0.2s;
    a + a {
      margin-left: 1.5rem;
    }
    a {
      position: relative;
    }
    a::before {
      position: absolute;
      content: "";
      width: 1.5rem;
      height: 2px;
      border-radius: 2px;
      background: var(--light);
      bottom: -0.5rem;
      left: calc(50% - 0.75rem);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.2s;
    }
    a:hover::before,
    a.active::before {
      transform: scaleX(1);
    }
  }
  .logo {
    cursor: pointer;
    svg {
      height: 2rem;
      color: #fafafc;
      transition: color 0.2s;
    }
    span {
      font-weight: 600;
      font-size: 1.15rem;
      margin-left: 0.5rem;
    }
  }
  .profile {
    justify-content: flex-end;
    white-space: nowrap;
    svg {
      height: 1.15rem;
    }
    a,
    .themeToggle {
      margin-right: 1.5rem;
    }
    .userIcon {
      background: #2e2e48;
      border-radius: 99px;
      height: 1.5rem;
      width: 1.5rem;
      color: #fafafc;
    }
    .user {
      background: #fafafc;
      border-radius: 99px;
      padding: 0.25rem 0.25rem 0.25rem 0.5rem;
    }
    .menu {
      color: #2e2e48;
      margin-right: 0.5rem;
    }
  }

  form {
    position: absolute;
    transform: translate(-50%, 150%);
    left: 50%;
    top: -1rem;
    background: var(--light);
    padding: 0.5rem;
    border-radius: 99px;
    display: flex;
    align-items: center;
    max-width: 720px;
    margin: 1.5rem 0;
    width: 60vw;
    box-shadow: 0 1rem 3rem -1rem #1e1e38;
    transition: all 0.2s;
    transform-origin: center;

    & * {
      transition: all 0.2s;
    }

    & > input {
      background: none;
      border: none;
      font-size: 1.15rem;
      flex: 1;
      padding: 0 1.5rem;
      color: var(--dark);
      outline: none;

      &::placeholder {
        color: var(--dark);
        opacity: 0.6;
      }
    }
    & > button {
      background: var(--red);
      color: #fafafc;
      border: none;
      padding: 0.5rem calc(1.75rem / 2);
      height: 3rem;
      max-width: 300px;
      display: flex;
      align-items: center;
      border-radius: 99px;
      font-weight: 700;
      font-size: 1rem;
      overflow: hidden;
      z-index: 2;

      &:hover:not(:disabled) {
        box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--red);
      }

      &:disabled {
        opacity: 0.5;
      }
    }
    & > button svg {
      height: 1.25rem;
      margin-right: 0.75rem;
      flex: 0 0 1.25rem;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: 36rem) {
    .profile,
    .logo,
    nav,
    form > button span {
      display: none;
    }
    .overlay {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr;
    }
    form {
      position: relative;
      transform: none !important;
      width: 100% !important;
      left: unset;
      top: 0;
      margin: 0;
      & > input {
        padding: 0 1rem;
        font-size: 1rem;
      }
      & > button {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0 0.6rem;
      }
      & > button svg {
        height: 1rem;
        width: 1rem;
      }
    }
  }

  @media (min-width: 36rem) and (max-width: 62.5rem) {
    nav {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr 1fr;
    }
  }

  &.scrolled:not(.inputFocus) {
    background: var(--light);
    color: var(--dark);
    border-bottom: 2px solid var(--gray);

    .overlay {
      opacity: 0;
      pointer-events: none;
    }

    nav {
      opacity: 0;
      pointer-events: none;
    }
    .logo svg {
      color: var(--red);
    }
    .user {
      box-shadow: 0 0 0 2px var(--gray);
    }
    form {
      box-shadow: 0 0 0 2px var(--gray);
      transform: translate(-50%, 0.125rem) scale(0.83);
      width: 480px;
      & > button {
        max-width: 3rem;
      }
      & > button span {
        opacity: 0;
      }
    }
    @media (max-width: 36rem) {
      padding-top: 1rem;
      padding-bottom: 1rem;

      form {
        padding: 0;
        box-shadow: none;
        background: var(--gray);
      }
    }

    @media (min-width: 36rem) and (max-width: 62.5rem) {
      .profile {
        opacity: 0;
        pointer-events: none;
      }
      form {
        left: auto;
        right: 0;
        transform: translate(0, 0.125rem) scale(0.83);
        width: 50%;
      }
    }
  }

  &.inputFocus {
    color: var(--dark);

    .logo svg {
      color: var(--red);
    }

    form {
      background: var(--light);
      width: 100%;
      box-shadow: 0 1rem 1.5rem -0.5rem #0001;
    }
  }
`;
