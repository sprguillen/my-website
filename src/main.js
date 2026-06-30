// Main JavaScript for Simon Phillip Guillen Portfolio

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target) &&
      !mobileMenu.classList.contains('hidden')
    ) {
      mobileMenu.classList.add('hidden');
    }
  });
}

// ============================================
// Smooth Scrolling
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if href is just "#"
    if (href === '#') {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
      const navbarHeight = 80; // Adjust based on your navbar height
      const targetPosition = target.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});

// ============================================
// Scroll Reveal Animations
// ============================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('revealed');
    }
  });
};

// Initial check on page load
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ============================================
// Active Navigation Highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNavigation = () => {
  const scrollPosition = window.scrollY + 200;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

window.addEventListener('scroll', highlightNavigation);

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');

const handleNavbarScroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleNavbarScroll);

// ============================================
// Background Glow Movement
// ============================================
const glow1 = document.getElementById('glow-1');
const glow2 = document.getElementById('glow-2');

let mouseX = 0;
let mouseY = 0;
let currentX1 = 0;
let currentY1 = 0;
let currentX2 = 0;
let currentY2 = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlows() {
  // Smooth follow for glow 1
  currentX1 += (mouseX - currentX1) * 0.05;
  currentY1 += (mouseY - currentY1) * 0.05;

  // Smooth follow for glow 2 (slower)
  currentX2 += (mouseX - currentX2) * 0.03;
  currentY2 += (mouseY - currentY2) * 0.03;

  if (glow1) {
    glow1.style.left = `${currentX1 - 192}px`; // 192 = half of w-96 (24rem)
    glow1.style.top = `${currentY1 - 192}px`;
  }

  if (glow2) {
    glow2.style.left = `${currentX2 - 192}px`;
    glow2.style.top = `${currentY2 - 192}px`;
  }

  requestAnimationFrame(animateGlows);
}

// Start the animation
animateGlows();

// ============================================
// Copy Email Button
// ============================================
const copyEmailBtn = document.getElementById('copy-email-btn');

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = 'spguillen@gmail.com';

    try {
      await navigator.clipboard.writeText(email);

      // Visual feedback
      const originalHTML = copyEmailBtn.innerHTML;

      copyEmailBtn.innerHTML = `
        <svg class="w-4 h-4 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      `;

      setTimeout(() => {
        copyEmailBtn.innerHTML = originalHTML;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);

      // Fallback: show alert
      alert(`Email: ${email}`);
    }
  });
}

// ============================================
// Intersection Observer for Performance
// ============================================
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

// ============================================
// Prevent FOUC (Flash of Unstyled Content)
// ============================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// ============================================
// Image Gallery Modal
// ============================================
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const modalCounter = document.getElementById('modal-counter');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const galleryImages = document.querySelectorAll('.gallery-image');

let currentImageIndex = 0;
let galleryImagesArray = [];

// Populate gallery images array
galleryImages.forEach((img, index) => {
  galleryImagesArray.push({
    src: img.dataset.image,
    caption: img.dataset.caption || '',
  });

  // Add click event to open modal
  img.addEventListener('click', () => {
    openModal(index);
  });
});

function openModal(index) {
  currentImageIndex = index;
  updateModalImage();
  imageModal.classList.remove('hidden');
  imageModal.classList.add('flex');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  imageModal.classList.add('hidden');
  imageModal.classList.remove('flex');
  document.body.style.overflow = ''; // Restore scrolling
}

function updateModalImage() {
  const image = galleryImagesArray[currentImageIndex];
  modalImage.src = image.src;
  modalImage.alt = image.caption;
  modalCaption.textContent = image.caption;
  modalCounter.textContent = `${currentImageIndex + 1} / ${galleryImagesArray.length}`;

  // Show/hide navigation buttons if needed
  if (galleryImagesArray.length <= 1) {
    modalPrev.style.display = 'none';
    modalNext.style.display = 'none';
  } else {
    modalPrev.style.display = 'flex';
    modalNext.style.display = 'flex';
  }
}

function showPreviousImage() {
  currentImageIndex =
    currentImageIndex > 0
      ? currentImageIndex - 1
      : galleryImagesArray.length - 1;
  updateModalImage();
}

function showNextImage() {
  currentImageIndex =
    currentImageIndex < galleryImagesArray.length - 1
      ? currentImageIndex + 1
      : 0;
  updateModalImage();
}

// Event listeners for modal controls
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalPrev) {
  modalPrev.addEventListener('click', showPreviousImage);
}

if (modalNext) {
  modalNext.addEventListener('click', showNextImage);
}

// Close modal when clicking outside the image
if (imageModal) {
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      closeModal();
    }
  });
}

// ============================================
// Keyboard Navigation Enhancement
// ============================================
document.addEventListener('keydown', (e) => {
  // Modal keyboard navigation (takes priority)
  if (imageModal && !imageModal.classList.contains('hidden')) {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      showPreviousImage();
    } else if (e.key === 'ArrowRight') {
      showNextImage();
    }
    return;
  }

  // Allow Escape key to close mobile menu
  if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
});

// ============================================
// Reduced Motion Support
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  // Disable animations for users who prefer reduced motion
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('revealed');
  });

  // Disable smooth scroll
  document.documentElement.style.scrollBehavior = 'auto';
}

// ============================================
// Console Message (Easter Egg)
// ============================================
console.log(
  '%c👋 Hey there!',
  'font-size: 24px; font-weight: bold; color: #8B5CF6;'
);
console.log(
  '%cInterested in the code? Check out the repo or reach out!',
  'font-size: 14px; color: #22D3EE;'
);
console.log(
  '%cspguillen@gmail.com',
  'font-size: 14px; color: #F5F5F5; font-family: monospace;'
);
