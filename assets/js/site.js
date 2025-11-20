// header toggle
var toggleOpen = document.getElementById("toggleOpen");
var toggleClose = document.getElementById("toggleClose");
var collapseMenu = document.getElementById("collapseMenu");

function handleClick() {
  collapseMenu.classList.toggle("-translate-y-full");
  collapseMenu.classList.toggle("translate-y-14");
}

toggleOpen.addEventListener("click", handleClick);
toggleClose.addEventListener("click", handleClick);

// Discover Swiper
const SwiperContainerWidth =
  document.querySelector(".swiper-wrapper").offsetWidth;
const SwiperOffsetXL = SwiperContainerWidth * 0.1; // 10% of container width
const SwiperOffsetMD = SwiperContainerWidth * 0.05; // 7% of container width
const SwiperOffset = SwiperContainerWidth * 0.04; // 5% of container width
const SwiperOffsetSM = SwiperContainerWidth * 0.03; // 3% of container width

var swiper = new Swiper(".discoverSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  initialSlide: 0,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 15,
      slidesOffsetAfter: SwiperOffsetSM,
      slidesOffsetBefore: SwiperOffsetSM,
    },
    1024: {
      slidesPerView: 2.8,
      spaceBetween: 20,
      slidesOffsetAfter: SwiperOffsetSM,
      slidesOffsetBefore: SwiperOffsetSM,
    },
    1280: {
      slidesPerView: 3.5,
      slidesOffsetBefore: SwiperOffsetSM,
      slidesOffsetAfter: SwiperOffsetSM,
    },
    1440: {
      slidesPerView: 3.5,
      slidesOffsetBefore: SwiperOffsetMD,
      slidesOffsetAfter: SwiperOffsetMD,
    },
    1560: {
      slidesPerView: 3.5,
      slidesOffsetBefore: SwiperOffset,
      slidesOffsetAfter: SwiperOffset,
    },
    1920: {
      slidesPerView: 3.5,
      slidesOffsetBefore: SwiperOffsetXL,
      slidesOffsetAfter: SwiperOffsetXL,
    },
  },
});

//Celestia Swiper
var swiper = new Swiper(".celestiaSwiperThumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
});
var swiper2 = new Swiper(".celestiaSwiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".celestia-next",
    prevEl: ".celestia-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Celestia Swiper Videos
var celestiaVidoeSwiper = new Swiper(".celestiaVidoeSwiper", {
  slidesPerView: 3.5,
  initialSlide: 0,
  spaceBetween: 15,
  centeredSlides: false,
  navigation: {
    nextEl: ".celestia-next",
    prevEl: ".celestia-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 3.5,
    },
    768: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 4.7,
    },
  },
});

//Jewel Swiper
var swiper = new Swiper(".jewelSwiperThumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
});
var swiper2 = new Swiper(".jewelSwiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".celestia-next",
    prevEl: ".celestia-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Jewel Swiper Videos
var jewelVidoeSwiper = new Swiper(".jewelVidoeSwiper", {
  slidesPerView: 3.5,
  initialSlide: 0,
  spaceBetween: 15,
  centeredSlides: false,
  navigation: {
    nextEl: ".celestia-next",
    prevEl: ".celestia-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 3.5,
    },
    768: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 4.7,
    },
  },
});

// Siper PopOver
const swiperPopover = new Swiper(".popover-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".celestia-next",
    prevEl: ".celestia-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

// Get the popover element and the close button
const popover = document.getElementById("popover");
const closePopoverButton = document.getElementById("closePopover");

// Jewel Swiper videos
jewelVidoeSwiper.slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    // Show the popover
    popover.classList.remove("hidden");
    // Navigate the popover swiper to the clicked slide
    swiperPopover.slideTo(index);
  });
});

// Jewel Swiper videos
celestiaVidoeSwiper.slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    // Show the popover
    popover.classList.remove("hidden");
    // Navigate the popover swiper to the clicked slide
    swiperPopover.slideTo(index);
  });
});

// Close the popover when the close button is clicked
closePopoverButton.addEventListener("click", () => {
  popover.classList.add("hidden");
});

// Explore Swiper
var swiper = new Swiper(".exploreSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  initialSlide: 0,
  slidesOffsetAfter: 0,
  slidesOffsetBefore: 0,
  centeredSlides: false,
  navigation: {
    nextEl: ".exploreSwiper-next",
    prevEl: ".exploreSwiper-prev",
  },
  pagination: {
    el: ".swiper-pagination2",
    type: "progressbar",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 15,
      slidesOffsetAfter: SwiperOffsetSM,
      slidesOffsetBefore: SwiperOffsetSM,
    },
    1024: {
      slidesPerView: 2.8,
      spaceBetween: 20,
      slidesOffsetAfter: SwiperOffsetSM,
      slidesOffsetBefore: SwiperOffsetSM,
    },
    1280: {
      slidesPerView: 3.5,
      slidesOffsetBefore: SwiperOffsetSM,
      slidesOffsetAfter: SwiperOffsetSM,
    },
    1440: {
      slidesPerView: 3.5,
      slidesOffsetBefore: SwiperOffsetMD,
      slidesOffsetAfter: SwiperOffsetMD,
    },
    1560: {
      slidesPerView: 3.6,
      slidesOffsetBefore: SwiperOffset,
      slidesOffsetAfter: SwiperOffset,
    },
    1920: {
      slidesPerView: 3.7,
      slidesOffsetBefore: SwiperOffsetXL,
      slidesOffsetAfter: SwiperOffsetXL,
    },
  },
});

// Testimonials Swiper
var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  initialSlide: 0,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination3",
    type: "progressbar",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Flat Picker
// Initialize Flatpickr for the first set
const checkinPicker1 = flatpickr("#checkin1", {
  dateFormat: "Y-m-d",
  onChange: function (selectedDates, dateStr, instance) {
    // Ensure checkoutPicker1 is initialized after checkinPicker1
    checkoutPicker1.open();
  },
});

// Initialize Flatpickr for the first set checkout
const checkoutPicker1 = flatpickr("#checkout1", {
  dateFormat: "Y-m-d",
  onOpen: function (selectedDates, dateStr, instance) {
    const checkinDate = checkinPicker1.selectedDates[0];
    if (checkinDate) {
      instance.set("minDate", checkinDate);
    } else {
      instance.set("minDate", null);
    }
  },
});

// Initialize Flatpickr for the second set
const checkinPicker2 = flatpickr("#checkin2", {
  dateFormat: "Y-m-d",
  onChange: function (selectedDates, dateStr, instance) {
    // Ensure checkoutPicker2 is initialized after checkinPicker2
    checkoutPicker2.open();
  },
});

// Initialize Flatpickr for the second set checkout
const checkoutPicker2 = flatpickr("#checkout2", {
  dateFormat: "Y-m-d",
  onOpen: function (selectedDates, dateStr, instance) {
    const checkinDate = checkinPicker2.selectedDates[0];
    if (checkinDate) {
      instance.set("minDate", checkinDate);
    } else {
      instance.set("minDate", null);
    }
  },
});

// PreventDefault for buttons
var buttons = document.querySelectorAll('form button:not([type="submit"])');
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    e.preventDefault();
  });
}

// accordian
document.querySelectorAll(".accordion button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      // button.querySelector("span").innerHTML = "&#10005;";
      button.querySelector("span").classList.remove("rotate-45");
      button.querySelector("span").classList.add("rotate-0");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      button.querySelector("span").classList.add("rotate-45");
      button.querySelector("span").classList.remove("rotate-0");
      accordionContent.style.maxHeight = 0;
    }
  });
});

// Booking Modal Elements
const bookingModal = document.getElementById("bookingModal");
const closeBookingModalBtn = document.getElementById("closeBookingModalBtn");

// Buttons that open the booking modal
const openBookingModalBtns = [
  "openBookingModalBtn",
  "openBookingModalBtn0",
  "openBookingModalBtn2",
  "openBookingModalBtn3",
].map((id) => document.getElementById(id));

// Function to open the booking modal
const openBookingModal = () => {
  bookingModal.classList.remove("opacity-0", "pointer-events-none", "scale-95");
  bookingModal.classList.add("opacity-100", "scale-100");
};

// Attach the open function to all booking modal buttons
openBookingModalBtns.forEach((btn) =>
  btn?.addEventListener("click", openBookingModal)
);

// Function to close the booking modal
const closeBookingModal = () => {
  bookingModal.classList.add("opacity-0", "pointer-events-none", "scale-95");
  bookingModal.classList.remove("opacity-100", "scale-100");
};

// Close modal when clicking the close button or backdrop
closeBookingModalBtn.addEventListener("click", closeBookingModal);
bookingModal.addEventListener("click", (event) => {
  if (event.target === bookingModal) {
    closeBookingModal();
  }
});

// Reservation Modal Elements
const submitReservationForm = document.getElementById("submitReservationForm");
const reservationSuccessModal = document.getElementById(
  "reservationSuccessModal"
);
const closeReservationSuccessBtn = document.getElementById(
  "closeReservationSuccessModal"
);

// Function to open the reservation success modal
const openReservationModal = () => {
  closeBookingModal(); // Close booking modal before opening reservation modal
  reservationSuccessModal.classList.remove(
    "opacity-0",
    "pointer-events-none",
    "scale-95"
  );
  reservationSuccessModal.classList.add("opacity-100", "scale-100");
};

// Function to close the reservation success modal
const closeReservationModal = () => {
  reservationSuccessModal.classList.add(
    "opacity-0",
    "pointer-events-none",
    "scale-95"
  );
  reservationSuccessModal.classList.remove("opacity-100", "scale-100");
};

// Attach event to the form submit button to open reservation modal
submitReservationForm.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  openReservationModal(); // Open the reservation modal
});

// Attach event to close button and backdrop to close reservation modal
closeReservationSuccessBtn.addEventListener("click", closeReservationModal);
reservationSuccessModal.addEventListener("click", (event) => {
  if (event.target === reservationSuccessModal) {
    closeReservationModal();
  }
});

// Reservation Modal Elements
const openThanksModal = document.getElementById("openThanksModal");
const thanksModal = document.getElementById("thanksModal");
const closethanksModal = document.getElementById("closethanksModal");

// Function to open the reservation success modal
const openThankModal = () => {
  thanksModal.classList.remove("opacity-0", "pointer-events-none", "scale-95");
  thanksModal.classList.add("opacity-100", "scale-100");
};

const closeThanksModal = () => {
  thanksModal.classList.add("opacity-0", "pointer-events-none", "scale-95");
  thanksModal.classList.remove("opacity-100", "scale-100");
};

openThanksModal.addEventListener("click", (event) => {
  event.preventDefault();
  openThankModal();
});

closethanksModal.addEventListener("click", closeThanksModal);
thanksModal.addEventListener("click", (event) => {
  if (event.target === thanksModal) {
    closeThanksModal();
  }
});
