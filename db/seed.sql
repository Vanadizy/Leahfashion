USE leah_fashion;

INSERT INTO admins (username, password_hash, full_name)
VALUES (
  'admin',
  '$2a$10$VCaGDSDQbCPzbDmCqxYVX.Pbd3NmCv4U/u3nmjxFuv1trIouBvcq6',
  'Leah Fashion Admin'
)
ON DUPLICATE KEY UPDATE
  full_name = VALUES(full_name);

INSERT INTO site_content (slug, content)
VALUES (
  'main',
  JSON_OBJECT(
    'theme', JSON_OBJECT(
      'accent', '#d4a95a',
      'accentDeep', '#93672e',
      'canvas', '#f6eee4',
      'surface', '#f1e2d3',
      'ink', '#4b3423',
      'muted', '#6f5947'
    ),
    'brand', JSON_OBJECT(
      'name', 'Leah Fashion',
      'tagline', 'Wedding couture studio',
      'logo', 'assets/images/brand/leah-fashion-logo.png',
      'headingFont', 'Cormorant Garamond',
      'bodyFont', 'Plus Jakarta Sans'
    ),
    'hero', JSON_OBJECT(
      'eyebrow', 'Wedding Couture by Leah Fashion',
      'title', 'Wedding gowns, reception looks, and custom couture designed with graceful detail and joyful finishing.',
      'text', 'Leah Fashion creates bridal pieces that feel elegant in photographs, comfortable in movement, and memorable from the first fitting to the final reveal.',
      'buttonLabel', 'Read More',
      'buttonTarget', '#about',
      'image', 'assets/images/fitting.jpeg',
      'imageAlt', 'Bride wearing a fitted white wedding gown outdoors',
      'imageLabel', 'Hero Wedding',
      'portraitImage', 'assets/images/leah.jpeg',
      'portraitAlt', 'Leah Fashion founder wearing a tailored design with measuring tape',
      'portraitLabel', 'Leah',
      'badgeText', 'Custom bridal design, refined fittings, and celebration styling shaped in Leah Fashion''s warm studio process.',
      'stats', JSON_ARRAY(
        JSON_OBJECT('value', '120+', 'label', 'Bridal fittings finished with custom care.'),
        JSON_OBJECT('value', '8', 'label', 'Signature collections for wedding and occasion styling.'),
        JSON_OBJECT('value', '1:1', 'label', 'Personal consultations from concept to final fitting.')
      )
    ),
    'whyUs', JSON_OBJECT(
      'title', 'Why clients trust Leah Fashion',
      'intro', 'Clients choose Leah Fashion because the studio combines calm guidance, fitting accuracy, and a polished wedding finish. Every stage, from consultation to final adjustment, is explained clearly so brides and families feel relaxed, informed, and confident in the final look.',
      'pillars', JSON_ARRAY(
        JSON_OBJECT('title', 'Guided Consultations', 'text', 'Each bride is guided through fabrics, silhouettes, finishing details, and fitting choices in a way that feels calm, personal, and easy to follow.'),
        JSON_OBJECT('title', 'Tailored Finishing', 'text', 'Leah Fashion refines each garment around the client''s body, event mood, and movement so the final silhouette feels natural, flattering, and secure.'),
        JSON_OBJECT('title', 'Joyful Fittings', 'text', 'Warm communication, clear timelines, and thoughtful adjustments keep the process exciting rather than stressful, especially close to the wedding day.'),
        JSON_OBJECT('title', 'Recognized Craft', 'text', 'The studio''s awards and client praise reflect consistent bridal workmanship, memorable styling, and a finish that photographs beautifully.')
      ),
      'awardsTitle', 'Awards and recognition earned through bridal craftsmanship',
      'awards', JSON_ARRAY(
        JSON_OBJECT('year', '2025', 'title', 'Bridal Style Excellence', 'text', 'Recognized for polished gown finishing, fitting precision, and strong ceremony presentation.', 'image', 'assets/images/fitting.jpeg', 'alt', 'Bride wearing a fitted white wedding gown outdoors'),
        JSON_OBJECT('year', '2024', 'title', 'Client Choice Studio', 'text', 'Awarded for a warm client journey, dependable communication, and memorable bridal delivery.', 'image', 'assets/images/satisfied_fitting.jpeg', 'alt', 'Smiling woman wearing an orange fitted gown'),
        JSON_OBJECT('year', '2023', 'title', 'Creative Wedding Couture', 'text', 'Celebrated for expressive wedding styling, confident silhouettes, and event-ready couture detail.', 'image', 'assets/images/details.jpeg', 'alt', 'Woman in an embellished orange evening gown'),
        JSON_OBJECT('year', '2022', 'title', 'Emerging Fashion House', 'text', 'Honored for rising design quality, growing bridal demand, and refined finishing standards.', 'image', 'assets/images/designs.jpeg', 'alt', 'Woman wearing a black and gold reception dress'),
        JSON_OBJECT('year', '2021', 'title', 'Elegant Occasion Wear Recognition', 'text', 'Praised for reception looks and occasion pieces that balance glamour, comfort, and movement.', 'image', 'assets/images/leah.jpeg', 'alt', 'Leah Fashion owner in a tailored outfit with measuring tape'),
        JSON_OBJECT('year', '2020', 'title', 'Fashion Craft Merit', 'text', 'Recognized for careful stitching, confident tailoring, and a clear design vision for celebration wear.', 'image', 'assets/images/fitting.jpeg', 'alt', 'Bride wearing a fitted white wedding gown outdoors')
      )
    ),
    'catalog', JSON_OBJECT(
      'title', 'Leah Fashion collections, fittings, and custom design direction',
      'intro', 'This catalog preview introduces the signature looks Leah Fashion is known for. Open the full catalog page to see ceremony styling, reception looks, fitting notes, and custom design details in a more complete format.',
      'items', JSON_ARRAY(
        JSON_OBJECT(
          'title', 'Bridal Signature',
          'subtitle', 'Wedding gown collection',
          'description', 'Graceful bridal silhouettes designed for elegant entrances, flattering structure, supportive fitting, and timeless ceremony presence.',
          'image', 'assets/images/fitting.jpeg',
          'alt', 'Bride wearing a fitted white wedding gown outdoors',
          'action', 'See Collection Details',
          'link', 'catalog.html#bridal-signature'
        ),
        JSON_OBJECT(
          'title', 'Reception Glow',
          'subtitle', 'After-dark bridal styling',
          'description', 'Bold reception styling shaped for glamorous entrances, confident movement, strong photographs, and celebration energy after the ceremony.',
          'image', 'assets/images/designs.jpeg',
          'alt', 'Woman wearing a black and gold reception dress',
          'action', 'Open Reception Details',
          'link', 'catalog.html#reception-glow'
        ),
        JSON_OBJECT(
          'title', 'Celebration Couture',
          'subtitle', 'Luxury occasion wear',
          'description', 'Rich embellished gowns created for introductions, evening receptions, family celebrations, and standout portrait moments.',
          'image', 'assets/images/details.jpeg',
          'alt', 'Woman in an embellished orange evening gown',
          'action', 'Explore Custom Couture',
          'link', 'catalog.html#celebration-couture'
        )
      )
    ),
    'gallery', JSON_OBJECT(
      'title', 'Studio gallery and recent wedding moments',
      'intro', 'Browse a quick visual edit here, then open the full gallery page for more images from fittings, finished looks, atelier details, and celebration styling.',
      'items', JSON_ARRAY(
        JSON_OBJECT('title', 'Leah Studio Moment', 'text', 'A calm studio portrait that reflects the confidence, tailoring focus, and personal design direction behind each Leah Fashion piece.', 'image', 'assets/images/leah.jpeg', 'alt', 'Leah Fashion owner in a tailored outfit with measuring tape'),
        JSON_OBJECT('title', 'Luxury Detail', 'text', 'Intricate beading, warm color, and sculpted finishing come together in a dramatic evening couture look.', 'image', 'assets/images/details.jpeg', 'alt', 'Woman wearing an embellished orange gown'),
        JSON_OBJECT('title', 'Satisfied Fitting', 'text', 'A completed fitting captured with joy, comfort, and confidence in the final silhouette.', 'image', 'assets/images/satisfied_fitting.jpeg', 'alt', 'Smiling woman wearing an orange fitted gown'),
        JSON_OBJECT('title', 'Bridal Grace', 'text', 'A clean bridal portrait that highlights fitted shaping, soft lace texture, and a polished wedding finish.', 'image', 'assets/images/fitting.jpeg', 'alt', 'Bride in a white fitted wedding gown'),
        JSON_OBJECT('title', 'Reception Statement', 'text', 'A standout party look with bold contrast, rich texture, and unmistakable celebration energy.', 'image', 'assets/images/designs.jpeg', 'alt', 'Woman wearing a dramatic black and gold event dress')
      )
    ),
    'about', JSON_OBJECT(
      'title', 'A bridal studio shaped with warmth, elegance, and joyful detail',
      'story', 'Leah Fashion brings together graceful bridal tailoring, a calm fitting atmosphere, and a warm monochromatic presentation that feels polished without becoming heavy. The studio approach is personal, the silhouettes are refined, and each detail is arranged to help clients feel beautiful, happy, and fully seen.',
      'quote', 'Joyful bridal fashion deserves a calm process, graceful detail, and a finish that feels personal.',
      'values', JSON_ARRAY(
        JSON_OBJECT('title', 'Floral Warmth', 'text', 'Soft gold layering, gentle pattern work, and welcoming presentation create a bridal mood that feels bright, feminine, and memorable.'),
        JSON_OBJECT('title', 'Happy Fittings', 'text', 'The process is designed to keep clients comfortable, celebrated, and clear about what happens next from consultation to final adjustment.'),
        JSON_OBJECT('title', 'Monochrome Elegance', 'text', 'A restrained gold, cream, and deep neutral palette keeps the brand consistent while giving every dress and portrait stronger visual focus.')
      )
    ),
    'contact', JSON_OBJECT(
      'title', 'Plan a fitting or ask about a custom design',
      'intro', 'Invite clients to call, email, or chat directly with the Leah Fashion studio.',
      'cards', JSON_ARRAY(
        JSON_OBJECT('title', 'Phone', 'text', '+255 700 123 456'),
        JSON_OBJECT('title', 'Email', 'text', 'hello@leahfashion.com'),
        JSON_OBJECT('title', 'Location', 'text', 'Buswelu, Mwanza'),
        JSON_OBJECT('title', 'Studio Hours', 'text', 'Mon - Thu | 9:00 AM - 6:00 PM, Fri | 9:00 AM - 2:00 PM, Sat - Sun | Closed')
      ),
      'call', '+255700123456',
      'email', 'hello@leahfashion.com',
      'whatsapp', '+255700123456',
      'locationTitle', 'Buswelu, Mwanza',
      'locationSummary', 'Visit Leah Fashion in Buswelu, Mwanza for bridal fittings, custom consultations, and wedding styling guidance in a calm studio setting.',
      'mapEmbed', 'https://www.google.com/maps?q=Buswelu,+Mwanza&output=embed'
    ),
    'footer', JSON_OBJECT(
      'note', 'Leah Fashion blends warm guidance, bridal craftsmanship, and celebration styling for elegant wedding moments.',
      'instagram', 'https://instagram.com/leahfashion',
      'facebook', 'https://facebook.com/leahfashion'
    )
  )
)
ON DUPLICATE KEY UPDATE
  content = VALUES(content);
