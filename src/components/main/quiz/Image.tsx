import AWS from "aws-sdk";
import { useQuery, useQueryClient } from "react-query";
const Image = () => {
  // const queryClient = useQueryClient();
  // const { isLoading, isError, data, error, status } = useQuery(
  //   "image",
  //   fetchImage
  // );
  // if (status === "loading") {
  //   return <span>Loading...</span>;
  // }

  // const s3 = new AWS.S3({
  //   accessKeyId: "AKIA2YVAHNHF5647IIQM",
  //   secretAccessKey: "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",
  //   region: "ap-northeast-2",
  // });

  // console.log(s3);

  // var params = {
  //   Bucket: "trot-quiz",
  //   Key: "trot-quiz/old/강진.jpg",
  // };

  // s3.getObject(params, function (err, data) {
  //   if (err) console.error(err);
  //   else console.log(data);
  // });

  // if (status === "error") {
  //   return <span>Error: {error.message}</span>;
  // }
  return <>이미지입니다.</>;
};

async function fetchImage() {
  return fetch("young/금잔디.jpg");
}

export default Image;
