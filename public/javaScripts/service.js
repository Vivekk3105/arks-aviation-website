// Get all modals
const cabinCrewModal = document.getElementById('cabinCrewModal');
const groundStaffModal = document.getElementById('groundStaffModal');
const cargoModal = document.getElementById('cargoModal');
const securityModal = document.getElementById('securityModal');
const customerServiceModal = document.getElementById('customerServiceModal');

// Get all "Read More" links
const readMoreLinks = document.querySelectorAll('.read-more');

// Get all close buttons
const closeButtons = document.querySelectorAll('.close-btn');

// Function to open the appropriate modal
function openModal(courseType) {
    switch(courseType) {
        case 'cabinCrew':
            cabinCrewModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            break;
        case 'groundStaff':
            groundStaffModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            break;
        case 'cargo':
            cargoModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            break;
        case 'security':
            securityModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            break;
        case 'customerService':
            customerServiceModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            break;
    }
}

// Function to close all modals
function closeModals() {
    cabinCrewModal.style.display = 'none';
    groundStaffModal.style.display = 'none';
    cargoModal.style.display = 'none';
    securityModal.style.display = 'none';
    customerServiceModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Add click event listeners to "Read More" links
readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const courseType = this.getAttribute('data-course');
        openModal(courseType);
    });
});

// Add click event listeners to close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', closeModals);
});

// Close modal when clicking outside of it
window.addEventListener('click', function(e) {
    if (e.target === cabinCrewModal || e.target === groundStaffModal || e.target === cargoModal || e.target === securityModal || e.target === customerServiceModal) {
        closeModals();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModals();
    }
});



// ARROW

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
