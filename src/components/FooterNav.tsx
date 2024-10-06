import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';

function Link ({ href, text }:{ href:string, text:string }) {
  return (
    <div className="text-xs text-white leading-none mx-3">
      <a href={href} className="" target='_self'>
        {text}
      </a>
      <a href={href} className="" target='_blank' title="新しいウィンドウで開く">
        <FontAwesomeIcon icon={faWindowRestore} className='opacity-20 ml-2'/>
      </a>
    </div>
  );

}

function FooterNav () {
  return (
    <div className="flex flex-row -mx-3">
      <Link href="https://landit.co.jp/terms" text="利用規約" />
      <Link href="https://landit.co.jp/privacypolicy" text="プライバシーポリシー" />
    </div>
  );
}

export default FooterNav;
export { Link };
