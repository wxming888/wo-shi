(function() {
  'use strict';

  // --- Product Data ---
  const products = [
    // Stainless Steel
    { id: 'SS-001', name: 'Stainless Steel Lever Handle', desc: '316 stainless steel, satin finish, spring-loaded', category: 'stainless-steel', catLabel: 'Stainless Steel', material: 'SS316' },
    { id: 'SS-002', name: 'Modern SS Handle with Rose', desc: '304 stainless steel, brushed finish, round rose', category: 'stainless-steel', catLabel: 'Stainless Steel', material: 'SS304' },
    { id: 'SS-003', name: 'Heavy-Duty SS Entry Handle', desc: 'Commercial grade, anti-corrosion, suitable for high-traffic doors', category: 'stainless-steel', catLabel: 'Stainless Steel', material: 'SS316' },
    { id: 'SS-004', name: 'SS Curved Lever Handle', desc: 'Ergonomic curved design, satin stainless, spring mechanism', category: 'stainless-steel', catLabel: 'Stainless Steel', material: 'SS304' },
    { id: 'SS-005', name: 'SS Tubular Latch Handle', desc: 'For tubular locks, reversible, suitable for interior doors', category: 'stainless-steel', catLabel: 'Stainless Steel', material: 'SS304' },
    { id: 'SS-006', name: 'SS Paddle Handle', desc: 'Wide paddle design, push-pull action, ideal for commercial use', category: 'stainless-steel', catLabel: 'Stainless Steel', material: 'SS316' },
    { id: 'SS-007', name: 'SS Straight Lever Handle', desc: 'Classic straight lever, durable stainless, powder-coated option', category: 'stainless-steel', catLabel: 'Stainless Steel', material: 'SS304' },
    { id: 'SS-008', name: 'SS Square Rose Lever Handle', desc: '304 stainless steel, rectangular rose plate, brushed satin finish, durable spring mechanism', category: 'stainless-steel', catLabel: 'Stainless Steel', material: 'SS304', image: 'product-handle-01.png' },

    // Zinc Alloy
    { id: 'ZA-001', name: 'Zinc Alloy Lever Handle', desc: 'Die-cast zinc alloy, chrome plated, smooth action', category: 'zinc-alloy', catLabel: 'Zinc Alloy', material: 'Zinc Alloy' },
    { id: 'ZA-002', name: 'Zinc Alloy Handle with Lock', desc: 'Keylock integrated, chrome finish, bathroom and bedroom use', category: 'zinc-alloy', catLabel: 'Zinc Alloy', material: 'Zinc Alloy' },
    { id: 'ZA-003', name: 'Modern Square Rose Handle', desc: 'Square rose plate, matte black finish, contemporary style', category: 'zinc-alloy', catLabel: 'Zinc Alloy', material: 'Zinc Alloy' },
    { id: 'ZA-004', name: 'Zinc Alloy Privacy Handle', desc: 'Privacy function with turn-button, satin nickel plated', category: 'zinc-alloy', catLabel: 'Zinc Alloy', material: 'Zinc Alloy' },
    { id: 'ZA-005', name: 'Curved Rose Handle Set', desc: 'Curved rose plate, polished chrome, modern minimalist', category: 'zinc-alloy', catLabel: 'Zinc Alloy', material: 'Zinc Alloy' },
    { id: 'ZA-006', name: 'Zinc Alloy Passage Handle', desc: 'Passage function no locking, satin brass finish option', category: 'zinc-alloy', catLabel: 'Zinc Alloy', material: 'Zinc Alloy' },

    // Brass
    { id: 'BR-001', name: 'Solid Brass Lever Handle', desc: 'Forged solid brass, polished gold finish, premium weight', category: 'brass', catLabel: 'Brass', material: 'Brass' },
    { id: 'BR-002', name: 'Antique Brass Handle', desc: 'Aged brass finish, vintage design, ideal for classic interiors', category: 'brass', catLabel: 'Brass', material: 'Brass' },
    { id: 'BR-003', name: 'Brass Door Knob', desc: 'Round brass knob with rose, polished lacquered finish', category: 'brass', catLabel: 'Brass', material: 'Brass' },
    { id: 'BR-004', name: 'Brass Mortise Handle', desc: 'For mortise locks, heavy brass construction, dual-sided', category: 'brass', catLabel: 'Brass', material: 'Brass' },
    { id: 'BR-005', name: 'Brass Fluted Handle', desc: 'Fluted lever design, polished brass, hotel-grade durability', category: 'brass', catLabel: 'Brass', material: 'Brass' },
    { id: 'BR-006', name: 'Brass Colonial Handle', desc: 'Traditional colonial style, wrought brass, oil-rubbed bronze', category: 'brass', catLabel: 'Brass', material: 'Brass' },

    // Modern
    { id: 'MD-001', name: 'Minimalist Lever Handle', desc: 'Clean lines, matte black, concealed screws, Scandinavian', category: 'modern', catLabel: 'Modern', material: 'Aluminum/SS' },
    { id: 'MD-002', name: 'Straight Bar Handle', desc: 'Linear bar design, satin aluminum, for contemporary spaces', category: 'modern', catLabel: 'Modern', material: 'Aluminum' },
    { id: 'MD-003', name: 'Geometric Handle with Rose', desc: 'Angular lever, slim rose, PVD brushed gold finish', category: 'modern', catLabel: 'Modern', material: 'Zinc/SS' },
    { id: 'MD-004', name: 'Concealed Screw Handle', desc: 'No visible screws, seamless look, for minimalist doors', category: 'modern', catLabel: 'Modern', material: 'Aluminum' },
    { id: 'MD-005', name: 'T-bar Handle', desc: 'T-shaped lever, ergonomic grip, anodized aluminum', category: 'modern', catLabel: 'Modern', material: 'Aluminum' },
    { id: 'MD-006', name: 'Edge Lever Handle', desc: 'Ultra-slim lever, modern aesthetic, PVD stainless', category: 'modern', catLabel: 'Modern', material: 'SS304' },

    // Classic
    { id: 'CL-001', name: 'Victorian Lever Handle', desc: 'Ornate Victorian design, brass or bronze, traditional', category: 'classic', catLabel: 'Classic', material: 'Brass/Bronze' },
    { id: 'CL-002', name: 'Crystal Glass Knob', desc: 'Cut crystal knob, brass base, luxury door hardware', category: 'classic', catLabel: 'Classic', material: 'Crystal/Brass' },
    { id: 'CL-003', name: 'Porcelain Door Knob', desc: 'White porcelain with brass fittings, vintage reproduction', category: 'classic', catLabel: 'Classic', material: 'Porcelain/Brass' },
    { id: 'CL-004', name: 'Renaissance Lever Handle', desc: 'Ornate backplate, scroll details, antique bronze finish', category: 'classic', catLabel: 'Classic', material: 'Brass' },
    { id: 'CL-005', name: 'Georgian Style Handle', desc: 'Classic Georgian lever, polished brass, timeless design', category: 'classic', catLabel: 'Classic', material: 'Brass' },
    { id: 'CL-006', name: 'Art Deco Handle', desc: 'Geometric Art Deco pattern, satin gold, 1920s inspired', category: 'classic', catLabel: 'Classic', material: 'Zinc Alloy' },

    // Pull Handles
    { id: 'PH-001', name: 'SS Pull Handle 600mm', desc: 'Heavy-duty pull handle, 600mm center, satin finish', category: 'pull', catLabel: 'Pull Handle', material: 'SS304' },
    { id: 'PH-002', name: 'Aluminum Slim Pull Handle', desc: 'Slim profile 1000mm, anodized aluminum, minimalist', category: 'pull', catLabel: 'Pull Handle', material: 'Aluminum' },
    { id: 'PH-003', name: 'Curved Pull Handle', desc: 'Ergonomic curved grip, 400mm centers, brushed bronze', category: 'pull', catLabel: 'Pull Handle', material: 'Brass/Zinc' },
    { id: 'PH-004', name: 'Commercial Push Plate', desc: 'Brushed stainless plate 300x100mm, with pull handle', category: 'pull', catLabel: 'Pull Handle', material: 'SS304' },
    { id: 'PH-005', name: 'Channel Pull Handle', desc: 'Channel style recessed grip, 800mm, satin silver', category: 'pull', catLabel: 'Pull Handle', material: 'Aluminum' },
    { id: 'PH-006', name: 'Glass Door Pull Handle', desc: 'For glass doors, U-channel mount, 1000mm, SS finish', category: 'pull', catLabel: 'Pull Handle', material: 'SS304' },
    { id: 'PH-007', name: 'Zigzag Pull Handle', desc: 'Decorative zigzag, 500mm, modern commercial look', category: 'pull', catLabel: 'Pull Handle', material: 'SS304' },
  ];

  // --- Render Products ---
  const grid = document.getElementById('productGrid');

  function renderProducts(category) {
    const items = category === 'all' ? products : products.filter(function(p) { return p.category === category; });

    grid.innerHTML = items.map(function(p) {
      var imgHtml;
      if (p.image) {
        imgHtml = '<img src="images/' + p.image + '" alt="' + p.name + '">';
      } else {
        imgHtml = '<svg viewBox="0 0 200 200" width="140" height="140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60 100 Q60 60 100 60 Q140 60 140 100 Q140 140 100 140 Q60 140 60 100Z" stroke="#c4a35a" stroke-width="3" fill="rgba(196,163,90,0.08)"/><rect x="62" y="85" width="76" height="30" rx="4" stroke="#c4a35a" stroke-width="2" fill="rgba(196,163,90,0.05)"/><circle cx="100" cy="80" r="6" stroke="#c4a35a" stroke-width="1.5" fill="rgba(196,163,90,0.1)"/><text x="100" y="105" text-anchor="middle" font-size="11" fill="#c4a35a" font-family="Inter,sans-serif" font-weight="600">HANDLE</text></svg>';
      }
      return ['<div class="product-card" data-category="' + p.category + '">','<div class="product-card-image"><div class="placeholder-img">' + imgHtml + '</div></div>','<div class="product-card-body"><div class="product-card-category">' + p.catLabel + '</div><h3>' + p.name + '</h3><p>' + p.desc + '</p><div class="product-card-footer"><span class="product-ref">' + p.id + ' | ' + p.material + '</span><span class="product-inquire">Inquire &rarr;</span></div></div></div>'
      ].join('\n');
    });
            '<div class="product-card-category">' + p.catLabel + '</div>',
            '<h3>' + p.name + '</h3>',
            '<p>' + p.desc + '</p>',
            '<div class="product-card-footer">',
              '<span class="product-ref">' + p.id + ' | ' + p.material + '</span>',
              '<span class="product-inquire">Inquire &rarr;</span>',

    // click to inquire
    Array.from(document.querySelectorAll('.product-card')).forEach(function(card) {
      card.addEventListener('click', function() {
        var name = this.querySelector('h3').textContent;
        var ref = this.querySelector('.product-ref').textContent;
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('message').value = 'Hi, I am interested in product ' + ref + ' - ' + name + '. Please send me details and quotation.';
      });
    });

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
