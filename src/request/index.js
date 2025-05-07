let baseUrl = import.meta.env.VITE_BASE_URL;
console.log(baseUrl);

export async function getInvoices() {
  let req = await fetch(baseUrl);
  if (req.status === 200) {
    let result = await req.json();
    return result;
  } else {
    return new Error("Nimadur hato keti");
  }
}

export async function getInvoice(id) {
  let req = await fetch(baseUrl + `/${id}`);
  if (req.status === 200) {
    let result = await req.json();
    return result;
  } else {
    return new Error("Nimadur hato keti");
  }
}

export async function deleteById(id) {
  let req = await fetch(baseUrl + `/${id}`, {
    method: "DELETE",
  });
  if (req.status === 200) {
    return "seccess";
  } else {
    return new Error("Nimadur hato keti");
  }
}

export async function updateById(id, newData) {
  let req = await fetch(baseUrl + `/${id}`, {
    method: "PATCH",
    body: JSON.stringify(newData),
  });
  if (req.status === 200) {
    let result = req.json();
    return result;
  } else {
    return new Error("Nimadur hato keti");
  }
}

export async function addInvoice(data) {
  let req = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (req.status === 200) {
    let result = req.json();
    return result;
  } else {
    return new Error("Nimadur hato keti");
  }
}
