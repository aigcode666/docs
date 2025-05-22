const REPLACE_CONFIG = {
  targetString: '%26',
  replaceTo: 'and',
  attributes: ['id', 'href'],
  hashUpdate: true
};

const STRONG_TAG_REGEX = /<strong>(.*?)<\/strong>/gi;

const FOOTER_ICON_REPLACEMENT = {
  targetUrl: 'https://mintlify.b-cdn.net/v6.6.0/brands/discord.svg',
  newUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='17' viewBox='0 0 22 17'><path d='M8.37257 0L7.75893 0.0722259C7.75893 0.0722259 5.00579 0.366508 2.99514 1.94549H2.97157L2.94643 1.96854C2.49543 2.37424 2.299 2.8729 1.98864 3.60208C1.6228 4.47936 1.31135 5.37741 1.056 6.29134C0.473 8.35286 0 10.85 0 13.1344V13.3265L0.0982143 13.5186C0.825786 14.7671 2.1175 15.5624 3.31493 16.1118C4.51157 16.6612 5.54636 16.9524 6.26136 16.9762L6.72807 17L6.97321 16.592L7.83279 15.1029C8.74421 15.3042 9.79393 15.4395 11 15.4395C12.2061 15.4395 13.2558 15.3042 14.1672 15.1029L15.0268 16.592L15.2727 17L15.7386 16.9762C16.4536 16.9524 17.4884 16.6612 18.6851 16.1118C19.8825 15.5624 21.1742 14.7671 21.9018 13.5186L22 13.3265V13.1344C22 10.85 21.527 8.35286 20.944 6.29134C20.6886 5.37741 20.3772 4.47936 20.0114 3.60208C19.701 2.87214 19.5046 2.37424 19.0536 1.96931L19.0292 1.94472H19.0041C16.995 0.366508 14.2411 0.0722259 14.2411 0.0722259L13.6274 0L13.4059 0.552452C13.4059 0.552452 13.1788 1.11336 13.0381 1.7534C12.3627 1.66226 11.6819 1.61401 11 1.60895C10.5796 1.60895 9.85286 1.63584 8.96186 1.7534C8.82043 1.11336 8.59336 0.552452 8.59336 0.552452L8.37257 0ZM7.29221 1.7534C7.326 1.86097 7.35979 1.95394 7.39043 2.04154C6.3745 2.28741 5.291 2.66237 4.29707 3.26554L5.1315 4.56253C7.16964 3.32547 10.0972 3.14567 11 3.14567C11.902 3.14567 14.8304 3.32547 16.8685 4.56253L17.7029 3.26554C16.709 2.66237 15.6255 2.28741 14.6096 2.04077C14.6402 1.95394 14.674 1.86097 14.7078 1.75263C15.4409 1.89708 16.841 2.22748 17.9976 3.12185C17.9913 3.12493 18.2922 3.56904 18.5625 4.20217C18.8391 4.85374 19.1455 5.72122 19.4221 6.69934C19.9532 8.57491 20.3704 10.8593 20.4042 12.8701C19.9092 13.6085 18.9923 14.2746 18.0219 14.7195C17.4134 15.0007 16.7696 15.2022 16.1071 15.3188L15.7143 14.6711C15.9476 14.5866 16.1779 14.4944 16.3774 14.4068C17.5866 13.8874 18.2435 13.3265 18.2435 13.3265L17.2119 12.1739C17.2119 12.1739 16.7703 12.5704 15.7386 13.0145C14.7086 13.4586 13.1332 13.9027 11 13.9027C8.86679 13.9027 7.29221 13.4586 6.26136 13.0145C5.22971 12.5704 4.78814 12.1739 4.78814 12.1739L3.7565 13.3265C3.7565 13.3265 4.41336 13.8874 5.62257 14.4068C5.82214 14.4944 6.05236 14.5873 6.28571 14.6711L5.89286 15.3196C5.23009 15.2026 4.586 15.0005 3.97729 14.7187C3.00771 14.2746 2.09 13.6085 1.59657 12.8701C1.62957 10.8593 2.04679 8.57491 2.57871 6.69934C2.81376 5.85094 3.10054 5.01706 3.4375 4.20217C3.70779 3.56904 4.00871 3.12493 4.00243 3.12185C5.159 2.22748 6.55914 1.89708 7.29221 1.7534ZM8.25 6.98748C7.64264 6.98748 7.10521 7.32633 6.77679 7.75584C6.44836 8.18536 6.28571 8.71322 6.28571 9.29256C6.28571 9.87191 6.44836 10.3998 6.77679 10.8293C7.10521 11.2588 7.64264 11.5976 8.25 11.5976C8.85736 11.5976 9.39479 11.2588 9.72321 10.8293C10.0516 10.3998 10.2143 9.87191 10.2143 9.29256C10.2143 8.71322 10.0516 8.18536 9.72321 7.75584C9.39479 7.32633 8.85736 6.98748 8.25 6.98748ZM13.75 6.98748C13.1426 6.98748 12.6052 7.32633 12.2768 7.75584C11.9484 8.18536 11.7857 8.71322 11.7857 9.29256C11.7857 9.87191 11.9484 10.3998 12.2768 10.8293C12.6052 11.2588 13.1426 11.5976 13.75 11.5976C14.3574 11.5976 14.8948 11.2588 15.2232 10.8293C15.5516 10.3998 15.7143 9.87191 15.7143 9.29256C15.7143 8.71322 15.5516 8.18536 15.2232 7.75584C14.8948 7.32633 14.3574 6.98748 13.75 6.98748ZM8.25 8.5242C8.29321 8.5242 8.34821 8.53957 8.44643 8.66865C8.54464 8.79697 8.64286 9.0221 8.64286 9.29256C8.64286 9.56303 8.54464 9.78816 8.44643 9.91724C8.34821 10.0456 8.29321 10.0609 8.25 10.0609C8.20679 10.0609 8.15179 10.0456 8.05357 9.91647C7.92364 9.7334 7.855 9.5154 7.85714 9.29256C7.85714 9.0221 7.95536 8.79697 8.05357 8.66789C8.15179 8.53957 8.20679 8.5242 8.25 8.5242ZM13.75 8.5242C13.7932 8.5242 13.8482 8.53957 13.9464 8.66865C14.0446 8.79697 14.1429 9.0221 14.1429 9.29256C14.1429 9.56303 14.0446 9.78816 13.9464 9.91724C13.8482 10.0456 13.7932 10.0609 13.75 10.0609C13.7068 10.0609 13.6518 10.0456 13.5536 9.91647C13.4236 9.7334 13.355 9.5154 13.3571 9.29256C13.3571 9.0221 13.4554 8.79697 13.5536 8.66789C13.6518 8.53957 13.7068 8.5242 13.75 8.5242Z' fill='white' fill-opacity='0.85'/></svg>",
  styleRegex: /url\(["']?https:\/\/mintlify\.b-cdn\.net\/v6\.6\.0\/brands\/discord\.svg["']?\)/gi
};

(function() {
  // 1. 通用属性替换逻辑
  const replaceEncodedAttribute = (element, attr) => {
    const oldValue = element.getAttribute(attr);
    if (!oldValue || !oldValue.includes(REPLACE_CONFIG.targetString)) return;

    const newValue = oldValue.replaceAll(REPLACE_CONFIG.targetString, REPLACE_CONFIG.replaceTo);

    if (attr === 'id') {
      if (!document.getElementById(newValue)) {
        element.setAttribute(attr, newValue);
        console.log(`ID更新: ${oldValue} → ${newValue}`);
        
        if (REPLACE_CONFIG.hashUpdate && `#${newValue}` === window.location.hash) {
          requestAnimationFrame(() => element.scrollIntoView());
        }
      }
    } else if (attr === 'href') {
      element.setAttribute(attr, newValue);
      console.log(`HREF更新: ${oldValue} → ${newValue}`);
    }
  };

  // 2. 强标签处理逻辑
  const processStrongTags = (node) => {
    if (node.nodeType !== Node.TEXT_NODE || !STRONG_TAG_REGEX.test(node.textContent)) return;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = node.textContent.replaceAll(
      STRONG_TAG_REGEX,
      '<strong>$1</strong>'
    );

    const parent = node.parentNode;
    const newNodes = [...tempDiv.childNodes];
    newNodes.forEach(newNode => parent.insertBefore(newNode, node));
    parent.removeChild(node);
  };

  const processDOMSubtree = (root) => {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: function(node) {
          if (node.nodeType === Node.TEXT_NODE && STRONG_TAG_REGEX.test(node.textContent)) {
            return NodeFilter.FILTER_ACCEPT;
          }
          if (node.nodeType === Node.ELEMENT_NODE) {
            return NodeFilter.FILTER_SKIP;
          }
          return NodeFilter.FILTER_REJECT;
        }
      }
    );

    let currentNode;
    while ((currentNode = walker.nextNode())) {
      processStrongTags(currentNode);
    }
  };

  // 3. Footer SVG处理逻辑
  const replaceFooterSVGStyle = (svgElement) => {
    const styleValue = svgElement.getAttribute('style');
    if (!styleValue || !FOOTER_ICON_REPLACEMENT.styleRegex.test(styleValue)) return;

    const newStyle = styleValue.replace(
      FOOTER_ICON_REPLACEMENT.styleRegex,
      `url('${FOOTER_ICON_REPLACEMENT.newUrl}')`
    );
    svgElement.setAttribute('style', newStyle);
  };

  const checkFooterSVGs = () => {
    document.querySelectorAll('footer svg[style]').forEach(replaceFooterSVGStyle);
  };

  // 4. 核心Observer逻辑
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      // 处理新增节点
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          processDOMSubtree(node);
          REPLACE_CONFIG.attributes.forEach(attr => {
            if (node.hasAttribute(attr)) replaceEncodedAttribute(node, attr);
            node.querySelectorAll(`[${attr}]`).forEach(replaceEncodedAttribute);
          });

          if (node.closest('footer') && node.matches('svg')) {
            replaceFooterSVGStyle(node);
          }
        } else if (node.nodeType === Node.TEXT_NODE) {
          processStrongTags(node);
        }
      });

      // 处理属性变更
      if (mutation.type === 'attributes') {
        if (REPLACE_CONFIG.attributes.includes(mutation.attributeName)) {
          replaceEncodedAttribute(mutation.target, mutation.attributeName);
        }
        if (mutation.attributeName === 'style' && 
            mutation.target.closest('footer') && 
            mutation.target.matches('svg')) {
          replaceFooterSVGStyle(mutation.target);
        }
      }
    });
  });

  // 5. 初始化设置
  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributeFilter: [...REPLACE_CONFIG.attributes, 'style']
  });

  // 初始扫描
  REPLACE_CONFIG.attributes.forEach(attr => {
    document.querySelectorAll(`[${attr}*="${REPLACE_CONFIG.targetString}"]`).forEach(el => {
      replaceEncodedAttribute(el, attr);
    });
  });
  processDOMSubtree(document.body);
  checkFooterSVGs();

  // 6. SPA路由监听
  let lastPath = location.pathname + location.hash;
  const checkUrlChange = () => {
    if (lastPath !== (location.pathname + location.hash)) {
      lastPath = location.pathname + location.hash;
      REPLACE_CONFIG.attributes.forEach(attr => {
        document.querySelectorAll(`[${attr}*="${REPLACE_CONFIG.targetString}"]`).forEach(el => {
          replaceEncodedAttribute(el, attr);
        });
      });
      processDOMSubtree(document.body);
      checkFooterSVGs();
      handleHashUpdate();
    }
    requestAnimationFrame(checkUrlChange);
  };
  requestAnimationFrame(checkUrlChange);

  // 7. 哈希修正
  const handleHashUpdate = () => {
    const rawHash = decodeURIComponent(window.location.hash);
    if (!rawHash) return;

    const newHash = rawHash.replaceAll(REPLACE_CONFIG.targetString, REPLACE_CONFIG.replaceTo);
    if (rawHash !== newHash) {
      const targetElement = document.getElementById(newHash.replace('#', ''));
      if (targetElement) {
        history.replaceState(null, '', newHash);
        targetElement.scrollIntoView({ behavior: 'instant' });
      }
    }
  };

  // 8. 原型拦截保护
  const originalSetAttribute = SVGElement.prototype.setAttribute;
  SVGElement.prototype.setAttribute = function(name, value) {
    if (name === 'style' && this.closest('footer')) {
      value = value.replace(
        FOOTER_ICON_REPLACEMENT.styleRegex,
        `url('${FOOTER_ICON_REPLACEMENT.newUrl}')`
      );
    }
    originalSetAttribute.call(this, name, value);
  };
})();