
/**
 * Adds copyright symbol and year
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // decorate footer DOM
  block.textContent = '';
  const copyright = document.createElement('div');
  copyright.innerHTML = `<p>Copyright &copy; ${new Date().getFullYear()} Whale Hacks. All Rights Reserved.</p>`;
  block.append(copyright);
}
