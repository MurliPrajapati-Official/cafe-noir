/* ============================================
   MAIN.JS — Interactions & Animations
   Norwang Cafe & Restaurant
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Elements ----
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const backToTop = document.getElementById('backToTop');
    const reveals = document.querySelectorAll('.reveal');
    const heroBgImg = document.querySelector('.hero-bg img');

    // ---- Sticky Header & Parallax ----
    let lastScroll = 0;
    let hasScrolled = false;

    function handleScroll() {
        const y = window.scrollY;

        // Toggle scrolled class
        if (y > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top visibility
        if (backToTop) {
            if (y > 600) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        // Cinematic magazine scale-down parallax effect
        if (y > 0 && !hasScrolled) {
            hasScrolled = true;
            if (heroBgImg) {
                heroBgImg.style.transition = 'none';
            }
        }

        const heroHeight = window.innerHeight;
        if (y <= heroHeight && heroBgImg) {
            const scale = 1.15 - (y / heroHeight) * 0.15;
            const translateVal = (y / heroHeight) * -60;
            const opacity = 1 - (y / heroHeight) * 0.65;
            heroBgImg.style.transform = `scale(${Math.max(1.0, scale)}) translateY(${translateVal}px)`;
            heroBgImg.style.opacity = opacity;
        }

        lastScroll = y;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on load

    // ---- Hamburger Menu ----
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile nav on link click
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- Smooth Scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerH = header ? header.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;

                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- Back to Top ----
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---- Scroll Reveal (IntersectionObserver) ----
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -60px 0px'
        });

        reveals.forEach(el => observer.observe(el));
    } else {
        // Fallback: show everything
        reveals.forEach(el => el.classList.add('visible'));
    }

    // ---- Hero BG slow zoom on load ----
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) {
        heroBg.style.transition = 'transform 20s linear';
        setTimeout(() => {
            heroBg.style.transform = 'scale(1.15)';
        }, 100);
    }

    // ---- Reservation Form Submission Handler ----
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('res-name').value;
            const phone = document.getElementById('res-phone').value;
            const guests = document.getElementById('res-guests').value;
            const date = document.getElementById('res-date').value;
            const time = document.getElementById('res-time').value;

            // Form confirmation content replacement
            reservationForm.innerHTML = `
                <div class="reservation-success" style="text-align: center; padding: var(--s-48) 0; animation: fadeIn 0.5s ease forwards;">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent-blue)" stroke-width="1.5" style="margin-bottom: var(--s-24);"><polyline points="20 6 9 17 4 12"/></svg>
                    <h3 style="font-family: var(--ff-heading); font-size: 2rem; font-weight: 500; margin-bottom: var(--s-16); color: var(--clr-text);">Reservation Requested</h3>
                    <p style="color: var(--clr-text-2); max-width: 480px; margin: 0 auto var(--s-32); font-size: 0.95rem;">
                        Thank you, ${name}. We've received your request for <strong>${guests} guests</strong> on <strong>${date}</strong> at <strong>${time}</strong>. We'll text a confirmation to <strong>${phone}</strong> shortly.
                    </p>
                    <button type="button" class="btn btn-outline" onclick="window.location.reload()">Book Another Table</button>
                </div>
            `;
        });
    }
});
