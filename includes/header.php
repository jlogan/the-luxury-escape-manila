    <!-- Header -->
    <section class="bg-white w-full border-b">
      <header
        class="flex xl:py-6 py-4 bg-white min-h-[70px] relative z-50 container mx-auto"
      >
        <div
          class="flex flex-wrap items-center justify-between xl:gap-5 gap-2 lg:px-0 px-4 w-full"
        >
          <a href="javascript:void(0)">
            <img src="../assets/images/logo.png" alt="logo" class="w-56" />
          </a>

          <!-- Mobile Menu (Initially Hidden) -->
          <div
            id="collapseMenu"
            class="fixed inset-x-0 top-0 bg-white transform -translate-y-full transition-transform duration-300 ease-in-out"
          >
            <button
              id="toggleClose"
              class="lg:hidden fixed top-5 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                ></path>
              </svg>
            </button>

            <ul class="lg:flex gap-x-5 p-6 h-full overflow-auto">
              <li class="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)"
                  ><img
                    src="../assets/images/logo.png"
                    alt="logo"
                    class="w-36"
                  />
                </a>
              </li>
              <li class="max-lg:py-3 px-3">
                <a
                  href="#about"
                  class="hover:text-primary-700 text-primary block font-bold text-base"
                  >About</a
                >
              </li>
              <li class="max-lg:py-3 px-3">
                <a
                  href="#amenities"
                  class="hover:text-primary-700 text-primary block font-bold text-base"
                  >Amenities</a
                >
              </li>
              <li class="max-lg:py-3 px-3">
                <a
                  href="#units"
                  class="hover:text-primary-700 text-primary block font-bold text-base"
                  >Units</a
                >
              </li>
              <li class="max-lg:py-3 px-3">
                <a
                  href="#locations"
                  class="hover:text-primary-700 text-primary block font-bold text-base"
                  >Location</a
                >
              </li>
              <li class="max-lg:py-3 px-3">
                <a
                  href="#reviews"
                  class="hover:text-primary-700 text-primary block font-bold text-base"
                  >Reviews</a
                >
              </li>
              <li class="max-lg:py-3 px-3">
                <a
                  href="#faqs"
                  class="hover:text-primary-700 text-primary block font-bold text-base"
                  >FAQs</a
                >
              </li>
              <li class="mb-6 lg:hidden block">
                <a
                  class="bg-primary hover:bg-primary-800 text-white flex items-center w-max max-w-lg px-5 py-3 rounded-full gap-4 group"
                  role="alert"
                  href="#"
                  id="openBookingModalBtn0"
                >
                  <span class="font-semibold text-base">Book now</span>
                  <svg
                    class="w-[18px] shrink-0 fill-yellow-500 inline group-hover:translate-x-1 transition-all"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7L1 7L15 7ZM9 13L15 7L9 13ZM9 1L15 7L9 1Z"
                      fill="white"
                    />
                    <path
                      d="M15 7L1 7M15 7L9 13M15 7L9 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Desktop Menu -->
          <ul class="hidden lg:flex xl:gap-x-14 gap-10 p-6">
            <li>
              <a
                href="#about"
                class="hover:text-primary-700 text-primary font-bold text-base"
                >About</a
              >
            </li>
            <li>
              <a
                href="#amenities"
                class="hover:text-primary-700 text-primary font-bold text-base"
                >Amenities</a
              >
            </li>
            <li>
              <a
                href="#units"
                class="hover:text-primary-700 text-primary font-bold text-base"
                >Units</a
              >
            </li>
            <li>
              <a
                href="#locations"
                class="hover:text-primary-700 text-primary font-bold text-base"
                >Location</a
              >
            </li>
            <li>
              <a
                href="#reviews"
                class="hover:text-primary-700 text-primary font-bold text-base"
                >Reviews</a
              >
            </li>
            <li>
              <a
                href="#faqs"
                class="hover:text-primary-700 text-primary font-bold text-base"
                >FAQs</a
              >
            </li>
          </ul>
          <div class="flex max-lg:ml-auto space-x-3">
            <button
              class="lg:flex hidden cursor-pointer bg-primary hover:bg-primary-800 text-white items-center w-max max-w-lg px-5 py-3 rounded-full gap-4 group"
              role="alert"
              id="openBookingModalBtn"
            >
              <span class="font-semibold text-base">Book now</span>
              <svg
                class="w-[18px] shrink-0 fill-yellow-500 inline group-hover:translate-x-1 transition-all"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7L1 7L15 7ZM9 13L15 7L9 13ZM9 1L15 7L9 1Z"
                  fill="white"
                />
                <path
                  d="M15 7L1 7M15 7L9 13M15 7L9 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button id="toggleOpen" class="lg:hidden">
              <svg
                class="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </section>