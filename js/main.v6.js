(function() {
  'use strict';

  // --- Product Data ---
 const products = [
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-1.png' },
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-2.png' },
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-3.png' },
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-4.png' },
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-5.png' },
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-6.png' },
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-7.png' },
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-8.png' },
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-9.png' },
    { id: '', name: '', desc: '', category: 'backplates', catLabel: 'Backplates', material: '', image: 'backplate-10.png' },
 ];

 // --- Render Products ---
  const grid = document.getElementById('productGrid');

  function renderProducts(category) {
    const items = category === 'all' ? products : products.filter(function(p) { return p.category === category; });

    grid.innerHTML = items.map(function(p) {
      var imgHtml;
      if (p.image) {
        imgHtml = '<img style="width:100%;height:100%;object-fit:contain;padding:16px;display:block;background:#fff;" src="images/' + p.image + '" alt="' + p.name + '">';
      } else {
        imgHtml = '<svg viewBox="0 0 200 200" width="140" height="140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60 100 Q60 60 100 60 Q140 60 140 100 Q140 140 100 140 Q60 140 60 100Z" stroke="#c4a35a" stroke-width="3" fill="rgba(196,163,90,0.08)"/><rect x="62" y="85" width="76" height="30" rx="4" stroke="#c4a35a" stroke-width="2" fill="rgba(196,163,90,0.05)"/><circle cx="100" cy="80" r="6" stroke="#c4a35a" stroke-width="1.5" fill="rgba(196,163,90,0.1)"/><text x="100" y="105" text-anchor="middle" font-size="11" fill="#c4a35a" font-family="Inter,sans-serif" font-weight="600">HANDLE</text></svg>';
     }
       var nameHtml = p.name ? '<h3>' + p.name + '</h3>' : '';
       var descHtml = p.desc ? '<p>' + p.desc + '</p>' : '';
       var refHtml = (p.id || p.material) ? '<span class="product-ref">' + p.id + ' | ' + p.material + '</span>' : '';
       return ['<div class="product-card" data-category="' + p.category + '">','<div class="product-card-image"><div class="placeholder-img">' + imgHtml + '</div></div>','<div class="product-card-body"><div class="product-card-category">' + p.catLabel + '</div>' + nameHtml + descHtml + '<div class="product-card-footer">' + refHtml + '<span class="product-inquire">Inquire &rarr;</span></div></div></div>'
      ].join('\n');
    });
    // click to inquire
    Array.from(document.querySelectorAll('.product-card')).forEach(function(card) {
      card.addEventListener('click', function() {
        var nameEl = this.querySelector('h3');
        var refEl = this.querySelector('.product-ref');
        var name = nameEl ? nameEl.textContent : 'this product';
        var ref = refEl ? refEl.textContent : '';
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('message').value = 'Hi, I am interested in product ' + ref + ' - ' + name + '. Please send me details and quotation.';
      });
    });
  }

  renderProducts('all');

  // --- Filter Tabs ---
  var filterBtns = document.querySelectorAll('.filter-btn');
  Array.from(filterBtns).forEach(function(btn) {
    btn.addEventListener('click', function() {
      Array.from(filterBtns).forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      renderProducts(this.dataset.filter);
    });
  });

  // Footer filter links
  Array.from(document.querySelectorAll('.footer-links a[data-filter]')).forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
      var f = this.dataset.filter;
      Array.from(filterBtns).forEach(function(b) { b.classList.toggle('active', b.dataset.filter === f); });
      renderProducts(f);
    });
  });

  // --- Mobile Menu ---
  var mobileToggle = document.getElementById('mobileToggle');
  var navLinks = document.getElementById('navLinks');

  mobileToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  Array.from(navLinks.querySelectorAll('a')).forEach(function(link) {
    link.addEventListener('click', function() {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // --- Navbar Scroll ---
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // --- Counter Animation ---
  function animateCounters() {
    var counters = document.querySelectorAll('.stat-number');
    Array.from(counters).forEach(function(counter) {
      var target = parseInt(counter.dataset.target);
      var increment = Math.max(1, Math.floor(target / 40));
      var current = 0;
      function update() {
        current += increment;
        if (current >= target) {
          counter.textContent = target + '+';
          return;
        }
        counter.textContent = current;
        requestAnimationFrame(update);
      }
      update();
    });
  }

  var heroSection = document.querySelector('.hero');
  var counterDone = false;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !counterDone) {
        counterDone = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  if (heroSection) observer.observe(heroSection);

  // --- Contact Form ---
  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var msg = document.getElementById('message').value.trim();

    if (!name || !email || !msg) {
      showToast('Please fill in all required fields.');
      return;
    }

    var body = 'Name: ' + name + '\n'
      + 'Company: ' + document.getElementById('company').value + '\n'
      + 'Email: ' + email + '\n'
      + 'Phone: ' + document.getElementById('phone').value + '\n'
      + 'Product Interest: ' + document.getElementById('product-interest').value + '\n\n'
      + 'Message:\n' + msg;

    var mailto = 'mailto:sales@lsxtech.com'
      + '?subject=' + encodeURIComponent('Inquiry from ' + name)
      + '&body=' + encodeURIComponent(body);

    showToast('Opening your email client...');
    setTimeout(function() { window.location.href = mailto; }, 600);
  });

  // --- Toast ---
  function showToast(text) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = text;
    document.body.appendChild(toast);

    requestAnimationFrame(function() { toast.classList.add('show'); });

    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() { toast.remove(); }, 400);
    }, 3000);
  }

})();
