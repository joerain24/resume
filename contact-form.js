// Static contact form handler for GitHub Pages
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const message = formData.get('message');
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${name} - ${company || 'Personal'}`);
    const body = encodeURIComponent(`
From: ${name}
Email: ${email}
Company: ${company || 'Not specified'}

Message:
${message}
    `);
    
    const mailtoLink = `mailto:rainerij@msoe.edu?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    // Show success message
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
    
    // Reset form
    event.target.reset();
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});