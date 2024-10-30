import fs from 'fs';
const filePath = './.icona/icons.json';

// icons.json 파일을 로드
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
console.log('🚀 ~ data:', data);

// 아이콘 이름 변경 함수
const updateIconNames = (data) => {
  const updatedData = {};
  Object.keys(data).forEach((key) => {
    const iconName = key.split('/')[1]; // 슬래시 뒤의 아이콘 이름 추출
    updatedData[iconName] = {
      ...data[key],
      name: iconName, // name 필드도 변경
    };
  });
  return updatedData;
};

// 아이콘 이름 업데이트
const updatedIcons = updateIconNames(data);
console.log('🚀 ~ updatedIcons:', updatedIcons);

// 변경된 데이터를 다시 파일에 쓰기
fs.writeFileSync(filePath, JSON.stringify(updatedIcons, null, 2), 'utf8');

console.log('icons.json has been updated!');
