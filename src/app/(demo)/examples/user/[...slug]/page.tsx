import React from "react";

type Props = {
  params: { slug: string[] };
};

export default function User({ params }: Props) {
  return (
    <div>
      <ul>
        {params.slug.map((v) => (
          <li key={v}>userId: {v}</li>
        ))}
      </ul>
    </div>
  );
}
