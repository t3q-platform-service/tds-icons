import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // 현재 파일의 전체 경로
const __dirname = path.dirname(__filename); // 현재 파일이 위치한 디렉토리

const ICONS_DIR = path.join(__dirname, 'packages/react/src'); // 아이콘 파일들이 있는 디렉토리
const OUTPUT_FILE = path.join(__dirname, 'packages/react/src/index.ts'); // 결과 파일 경로

function generateExportStatements() {
  // 디렉토리 내 파일 목록 가져오기
  const files = fs.readdirSync(ICONS_DIR).filter((file) => file.endsWith('.tsx'));

  const removeFilesExtension = files.map((fileName) => {
    return path.basename(fileName, path.extname(fileName));
  });

  const exports = [];
  const icons = [];

  removeFilesExtension.forEach((file) => {
    const componentName = path.basename(file, '.js'); // 파일명에서 확장자 제거
    const iconKey = componentName
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()
      .replace(/^_/, ''); // camelCase → snake_case 변환

    exports.push(`import ${componentName} from './${componentName}';`);
    icons.push(`  ${iconKey}: ${componentName},`);
  });

  const result = `
${exports.join('\n')}

export const Icons = {
${icons.join('\n')}
};
`;

  // 결과 파일 생성
  fs.writeFileSync(OUTPUT_FILE, result.trim());
  console.log(`Icons file generated at: ${OUTPUT_FILE}`);
}

generateExportStatements();
