    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.skill-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), 120 + i * 100);
      });
    });

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('closeModal');

    const skillDetails = {
      "Photoshop": {
        text: "発表用として制作したビジュアルページ。模型写真をPhotoshopで色調補正と構図調整を行い、「空を映す静けさ」を表現。手書き風のタイトルフォントと明快なレイアウトで、発表資料として使用しました。",
        image: "imagesproject1.webp"
      },
      "Illustrator": {
        text: "学校課題として制作したビジュアルポスター。文化展示会をテーマに、Illustratorで抽象図形とビビッドな配色を組み合わせ、視覚的インパクトのある構成に仕上げました。",
        image: "imagesillustrator.webp"
      },
      "Premiere Pro": {
        text: "Webサイトのトップ映像に使用するため、自ら撮影したRAW素材をPremiere Proで編集・調色しました。Lumetriカラーを使った色味補正、明暗の調整、フィルムライクなトーンの演出にこだわり、全体の雰囲気に一貫性を持たせました。印象に残る第一印象を映像で設計しています。",
        image: "imagespremiere.webp"
      },
      "Vectorworks": {
        text: "ゾーニングや家具配置、動線計画までを一貫して行い、使いやすさと視覚的バランスの両立を意識した提案を実現しています。",
        image: "imagesvectorworks.webp"
      },
      "Twinmotion": {
        text: "実際の設計課題をもとに制作したオフィス空間のリアルタイムレンダリング。時間帯ごとの光の変化や動線を視覚的に確認できるよう工夫しました。",
        image: "imagestwinmotion.webp"
      },
      "AutoCAD": {
        text: "実際の建築図面をもとに、AutoCADで平面図のトレース演習を行いました。図面の寸法、家具配置、通路の確保までを忠実に再現し、レイヤー管理や印刷設定（ctbスタイル）も意識して作図を行いました。建築設計における図面の読み取り・表現力を高めるための実践です。",
        image: "imagesautocad.webp"
      },
      "VSCode": {
        text: "VSCode上でこのサイトを構築。HTML/CSS/JavaScriptを用いたマークアップからスタイル設計までを一貫して行います。Gitによるバージョン管理と変更履歴の確認（diffビューを用いた丁寧な調整）、Web制作の基礎を実践的に習得しました。",
        image: "imagesvscode.webp"
      },
      "フロントエンドデザイン": {
        text: "PC・スマートフォンの両方で快適に閲覧できるよう、レスポンシブなUIを意識して設計しています。情報の視認性、操作性、ボタン配置、アニメーション演出など、ユーザーが直感的に操作できる体験を目指し、デザインと構造を一体的に考えながら実装しました。",
        image: "imagesfrontend.webp"
      },
      "AI活用": {
        text: "Web制作の際にChatGPTを活用し、アニメーションの自然さやコードの可読性を改善しています。自分で書いたコードをAIと一緒に見直すことで、より洗練されたデザインと効率的な開発が可能になります。",
        image: "imagesai.webp"
      }
    };

    document.querySelectorAll('.skill-card').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        const detail = skillDetails[title];
        if (detail) {
          modalTitle.textContent = title;
          modalText.textContent = detail.text;
          modalImage.src = detail.image;
          modal.style.display = 'flex';
        }
      });
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
