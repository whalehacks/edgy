
/**
 * Adds copyright symbol and year
 * @param {Element} block The copyright block element
 */
export default async function decorate(block) {
  // decorate copyright DOM
    const year = `&copy ${new Date().getFullYear()}`;
    const content = block.textContent.replace("{{year}}",year);
    block.textContent = '';
    const copyright = document.createElement('div');
    copyright.innerHTML = `<p>${content}</p>`;
    block.append(copyright);
}
